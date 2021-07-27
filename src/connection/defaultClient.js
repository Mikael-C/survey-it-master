import axios from 'axios';
import { refreshUserTokenLocallyAction, logoutUserLocallyAction } from '../redux/actions/unAuthActions';
import store from '../redux/store';

// Get user details
const userDetails = () => {
  let authState = store.getState().auth;
  return authState;
}

// Retry Counter
const retryAgain = async () => {
  // max count for retires
  let maxCount = 1;

  // get current retry count, if non assign zero
  let retryCount = await localStorage.getItem('retryCount') ?? 0;

  // check if current retry count is less that allowed max count
  let retry = (parseInt(retryCount) < maxCount) ? true : false;

  // store new retry count
  localStorage.setItem('retryCount', retry ? (parseInt(retryCount)+1).toString() : '0');

  return retry;
}

// Refresh token
const refreshToken = async (token = null) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh`,{},{headers:{Authorization:'Bearer '+token}})
  .then(data => {
    // Send new token to reducer
    store.dispatch(refreshUserTokenLocallyAction(data));
    return data;
  })
  .catch((error) => {
    return error.response;
  });
}

// Logout user
const logoutUser = async () => {
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`)
  .then(data => {
    // Send new token to reducer
    store.dispatch(logoutUserLocallyAction());
    return data;
  })
  .catch((error) => {
    store.dispatch(logoutUserLocallyAction());
    return error.response;
  });
}

// Handle success response
const successResponseHandler = (response) => {

  // No content response (204)
  if (response.status === 204) { response.data = {data:{}}; }

  // Log response
  if (process.env.REACT_APP_ENV === 'development') {
    console.log(response.data);
  }

  // Additional checks for API that does not utilize the HTTP status code properly
  if (response.data.status === false || response.data.status === 'failed') {

    // Error message is retrieved from the JSON body.
    const error = new Error(response.data.message);

    // Attach the response instance, in case you decide to access it.
    error.response = response;

    throw error;
  }

  // Return processed response
  return response;
}

// Handle failure response
const failureResponseHandler = async (error) => {

  // Log error response
  if (process.env.REACT_APP_ENV === 'development') {
    console.log(error);
  }

  // No network response (ECONNABORTED)
  if (!error.response || error.code === 'ECONNABORTED'){
    alert(`Could not connect to network`);
    return Promise.reject(error);
  }

  // No authorization response (401)
  if (error.response && error.response.status === 401) {
    try {

      // Check if retry limit has been exceeded
      let shouldRetry = await retryAgain();
      if (!shouldRetry){throw new Error('Retry count exceeded')}

      // Attempt to refresh expired token
      let refreshTokenResponse = await refreshToken(userDetails().token);

      // Handle token refresh blacklisting caused by a prior request having refreshed the token already
      if (refreshTokenResponse.status.toString().split('')[0] !== '2') {
        refreshTokenResponse = {data:{data:{access_token:userDetails().token}}}
      }

      // Retry the failed request with returned token
      return await instance.request({...error.config, headers: {
        ...error.config.headers,
        Authorization: 'Bearer '+refreshTokenResponse.data.data.access_token,},
      })
      .then((response)=>{
        return successResponseHandler(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });

    } catch (error) {

      // Logout user
      logoutUser();
      return Promise.reject(error);
    }
  }

  // Return unprocessed error
  return Promise.reject(error);
}

// Create an axios instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000,
  headers:{}
});

// Add a request interceptor
instance.interceptors.request.use((req) => {

  // Get logged in user details and inject tokens to headers
  req.headers['Authorization'] = 'Bearer '+userDetails().token;

  // Set header content type and acceptable type
  // req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // req.headers['Accept'] = '*/*';

  // Reattach the base url
  if (!req.baseURL) {
    req.url = process.env.REACT_APP_API_URL+'/'+req.url;
  }

  return req;
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {return successResponseHandler(response);},
  (error) => {return failureResponseHandler(error);}
);

export default instance;