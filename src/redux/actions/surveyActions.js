import {
    INDEX_SURVEY,
    SHOW_SURVEY,
    MY_SURVEY,
    STORE_SURVEY,
    EDIT_SURVEY,
    DELETE_SURVEY,
    TEST_SURVEY,
} from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getAllSurveyAction = (payLoad) => {
    return (dispatch) => {
        Axios.get(`/survey/index`,{params:{...payLoad}})
        .then(data => {
            dispatch({type: INDEX_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const storeASurveyAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey/store`,{...payLoad})
        .then(data => {
            dispatch({type: STORE_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showASurveyAction = (payLoad) => {
    return (dispatch) => {
        Axios.get(`/survey/show`,{param:{...payLoad}})
        .then(data => {
            dispatch({type: SHOW_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showMySurveyAction = (callBack=()=>{}) => {
    return (dispatch) => {
        Axios.get(`/survey/me`)
        .then(data => {
            dispatch({type: MY_SURVEY, payLoad: data});
            callBack();
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const editASurveyAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey/update`,{...payLoad})
        .then(data => {
            dispatch({type: EDIT_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const deleteASurveyAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey/delete`,{...payLoad})
        .then(data => {
            dispatch({type: DELETE_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const testASurveyAction = () => {
    return (dispatch) => {
        Axios.get(`/survey/test`)
        .then(data => {
            dispatch({type: TEST_SURVEY, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}