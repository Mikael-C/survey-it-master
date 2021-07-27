import { INDEX_COURIERS, SHOW_COURIER } from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getCouriersAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/courier/order/index`,{...payLoad})
        .then(data => {
            dispatch({type: INDEX_COURIERS, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showCourierAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/courier/order/show`,{...payLoad})
        .then(data => {
            dispatch({type: SHOW_COURIER, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}
export default getCouriersAction