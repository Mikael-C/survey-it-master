import {
    INDEX_SURVEY,
    SHOW_SURVEY,
    MY_SURVEY,
    STORE_SURVEY,
    EDIT_SURVEY,
    DELETE_SURVEY,
    TEST_SURVEY,
} from '../actions/types';

const initialState = {
    surveys:{},
    storedSurvey:{},
    survey: {},
    userSurvey:{},
    deletedSurvey:{},
    testSurvey:{},
}

export default function surveyReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_SURVEY:
            return {
                ...state,
                surveys:action.payLoad.data,
            }

        case STORE_SURVEY:
            return {
                ...state,
                storedSurvey:action.payLoad.data,
            }

        case SHOW_SURVEY:
            return {
                ...state,
                survey:action.payLoad.data,
            }

        case MY_SURVEY:
            return {
                ...state,
                userSurvey:action.payLoad.data,
            }

        case EDIT_SURVEY:
            return {
                ...state,
                survey:action.payLoad.data,
            }

        case DELETE_SURVEY:
            return {
                ...state,
                deletedSurvey:action.payLoad.data,
            }

        case TEST_SURVEY:
            return {
                ...state,
                testSurvey:action.payLoad.data,
            }

        default:
            return state;
    }
}