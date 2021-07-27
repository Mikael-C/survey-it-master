import {
    INDEX_SURVEY_QUESTION,
    SHOW_SURVEY_QUESTION,
    STORE_SURVEY_QUESTION,
    EDIT_SURVEY_QUESTION,
    DELETE_SURVEY_QUESTION,
    TEST_SURVEY_QUESTION,
} from './types';
import Axios from '../../connection/defaultClient';
import errorHandler from '../../handlers/errorHandler';
import successHandler from '../../handlers/successHandler';

export const getAllSurveyQuestionAction = (payLoad) => {
    return (dispatch) => {
        Axios.get(`/survey-question/index`,{params:{...payLoad}})
        .then(data => {
            dispatch({type: INDEX_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const storeASurveyQuestionAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey-question/store`,{...payLoad})
        .then(data => {
            dispatch({type: STORE_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const showASurveyQuestionAction = (payLoad) => {
    return (dispatch) => {
        Axios.get(`/survey-question/show`,{param:{...payLoad}})
        .then(data => {
            dispatch({type: SHOW_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const editASurveyQuestionAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey-question/update`,{...payLoad})
        .then(data => {
            dispatch({type: EDIT_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const deleteASurveyQuestionAction = (payLoad) => {
    return (dispatch) => {
        Axios.post(`/survey-question/delete`,{...payLoad})
        .then(data => {
            dispatch({type: DELETE_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}

export const testASurveyQuestionAction = () => {
    return (dispatch) => {
        Axios.get(`/survey-question/test`)
        .then(data => {
            dispatch({type: TEST_SURVEY_QUESTION, payLoad: data});
            successHandler(data,true);
        })
        .catch((error) => {
            errorHandler(error,true);
        });
    }
}