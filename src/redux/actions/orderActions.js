import { INDEX_ORDERS, SHOW_ORDER } from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getOrdersAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/order/index`,{...payLoad})
        .then(data => {
            dispatch({type: INDEX_ORDERS, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showOrderAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/order/show`,{...payLoad})
        .then(data => {
            dispatch({type: SHOW_ORDER, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export default getOrdersAction