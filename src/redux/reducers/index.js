import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import companyReducer from "./companyReducer";
import orderReducer from './orderReducer';
import courierReducer from './courierReducer'

export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    users: userReducer,
    companies: companyReducer,
    orders: orderReducer,
    couriers: courierReducer,
});