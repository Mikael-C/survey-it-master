import { INDEX_COMPANIES, SHOW_COMPANY } from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getCompaniesAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/company/index`,{...payLoad})
        .then(data => {
            dispatch({type: INDEX_COMPANIES, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showCompanyAction = (payLoad,callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/company/show`,{...payLoad})
        .then(data => {
            dispatch({type: SHOW_COMPANY, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}
export default getCompaniesAction