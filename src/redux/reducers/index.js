import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import surveyReducer from './surveyReducer';
import surveyQuestionReducer from './surveyQuestionReducer';
import userReducer from './userReducer';
import companyReducer from "./companyReducer";
import orderReducer from './orderReducer';
import courierReducer from './courierReducer'

export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    survey: surveyReducer,
    surveyQuestion: surveyQuestionReducer,
    users: userReducer,
    companies: companyReducer,
    orders: orderReducer,
    couriers: courierReducer,
});