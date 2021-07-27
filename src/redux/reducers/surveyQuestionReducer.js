import {
    INDEX_SURVEY_QUESTION,
    SHOW_SURVEY_QUESTION,
    STORE_SURVEY_QUESTION,
    EDIT_SURVEY_QUESTION,
    DELETE_SURVEY_QUESTION,
    TEST_SURVEY_QUESTION,
} from '../actions/types';

const initialState = {
    surveyQuestions:{},
    storedSurveyQuestion:{},
    surveyQuestion: {},
    deletedSurveyQuestion:{},
    testSurveyQuestion:{},
}

export default function surveyQuestionReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_SURVEY_QUESTION:
            return {
                ...state,
                surveyQuestions:action.payLoad.data.data,
            }

        case STORE_SURVEY_QUESTION:
            return {
                ...state,
                storedSurveyQuestion:action.payLoad.data.data,
            }

        case SHOW_SURVEY_QUESTION:
            return {
                ...state,
                surveyQuestion:action.payLoad.data.data,
            }

        case EDIT_SURVEY_QUESTION:
            return {
                ...state,
                surveyQuestion:action.payLoad.data.data,
            }

        case DELETE_SURVEY_QUESTION:
            return {
                ...state,
                deletedSurveyQuestion:action.payLoad.data.data,
            }

        case TEST_SURVEY_QUESTION:
            return {
                ...state,
                testSurveyQuestion:action.payLoad.data.data,
            }

        default:
            return state;
    }
}