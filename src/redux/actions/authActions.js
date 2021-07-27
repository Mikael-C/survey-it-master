import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, REFRESHED_TOKEN, FORGOT_USER_PASSWORD, RESET_USER_PASSWORD, VERIFY_USER_EMAIL, GET_USER_DETAILS} from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';
import {persistLastLogin, updatePersistedLastLogin, destroyLastLogin, retrievePersistedLastLogin} from '../../support/sessionSupport';
import { loginUserValidation, registerUserValidation, changeUserPasswordValidation, forgotUserPasswordValidation, resetUserPasswordValidation } from '../../validation/authValidation';

export const loginUserAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        if (!loginUserValidation(dispatch, payLoad)) {
            return false;
        }

        Axios.post(`/auth/login`,{...payLoad})
        .then(data => {
            dispatch({type: LOGIN_USER, payLoad: data});
            persistLastLogin(data);
            callBack()
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const registerUserAction = (payLoad, callBack) => {
    return (dispatch) => {
        if (!registerUserValidation(dispatch, payLoad)) {
            return false;
        }

        Axios.post(`/auth/register`,{...payLoad})
        .then(data => {
            dispatch({type: REGISTER_USER, payLoad: data});
            callBack();
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const restoreLoggedInUserAction = (callBack=()=>{}) => {
    return async (dispatch) => {
        let data = await retrievePersistedLastLogin();
        if (data) {
            dispatch({type: LOGIN_USER, payLoad: data});
            callBack(true);
        } else {
            callBack(false);
        }
    }
}

export const changeUserPasswordAction = (payLoad, callBack=()=>{}) => {
    return (dispatch) => {
        if (!changeUserPasswordValidation(dispatch, payLoad)) {
            return false;
        }

        Axios.post(`/auth/change`,{...payLoad})
        .then(data => {
            dispatch({type: RESET_USER_PASSWORD, payLoad: data});
            successHandler(data,true);
            callBack();
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const forgotUserPasswordAction = (payLoad, callBack=()=>{}) => {
    return (dispatch) => {
        if (!forgotUserPasswordValidation(dispatch, payLoad)) {
            return false;
        }

        Axios.post(`/auth/forgot`,{...payLoad})
        .then(data => {
            dispatch({type: FORGOT_USER_PASSWORD, payLoad: data});
            successHandler(data,true);
            callBack();
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const resetUserPasswordAction = (payLoad, callBack) => {
    return (dispatch) => {
        if (!resetUserPasswordValidation(dispatch, payLoad)) {
            return false;
        }

        Axios.post(`/auth/reset`,{...payLoad})
        .then(data => {
            dispatch({type: RESET_USER_PASSWORD, payLoad: data});
            successHandler(data,true);
            callBack();
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const verifyUserEmailAction = (payLoad) => {
    return (dispatch) => {
        Axios.get(`/auth/verify`,{params:{...payLoad}})
        .then(data => {
            dispatch({type: VERIFY_USER_EMAIL, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const checkUserDetailsAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/auth/me`,{...payLoad})
        .then(data => {
            dispatch({type: GET_USER_DETAILS, payLoad: data});
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const logoutUserAction = () => {
    return (dispatch) => {
        Axios.post(`/auth/logout`)
        .then(data => {
            destroyLastLogin();
            dispatch({type: LOGOUT_USER, payLoad: {}});
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const refreshUserTokenAction = () => {
    return (dispatch) => {
        Axios.post(`/auth/refresh`)
        .then(data => {
            updatePersistedLastLogin(data);
            dispatch({type: REFRESHED_TOKEN, payLoad: data});
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}