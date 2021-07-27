import { INDEX_USERS, SHOW_USER } from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getUsersAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/user/index`,{...payLoad})
        .then(data => {
            dispatch({type: INDEX_USERS, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showUserAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/user/show`,{...payLoad})
        .then(data => {
            dispatch({type: SHOW_USER, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export default getUsersAction