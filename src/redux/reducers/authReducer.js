import { LOGIN_USER, REGISTER_USER, FORGOT_USER_PASSWORD, RESET_USER_PASSWORD, 
    LOGOUT_USER, REFRESHED_TOKEN, VERIFY_USER_EMAIL, GET_USER_DETAILS
} from '../actions/types';

const initialState = {
    user: {},
    token:'',
    forgotPassword:{},
    resetPassword:{},
    verifyEmail:{},
}

export default function authReducer (state=initialState, action) {

    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user:action.payLoad.data.data,
                token:action.payLoad.data.data.access_token,
            }

        case LOGOUT_USER:
            return {
                ...state,
                user:{},
                token:'',
            }

        case REGISTER_USER:
            return {
                ...state,
                user:action.payLoad.data.data,
                token:action.payLoad.data.data.access_token,
            }

        case REFRESHED_TOKEN:
            return {
                ...state,
                token:action.payLoad.data.data.access_token,
            }

        case FORGOT_USER_PASSWORD:
            return {
                ...state,
                forgotPassword:action.payLoad.data.data,
            }

        case RESET_USER_PASSWORD:
            return {
                ...state,
                resetPassword:action.payLoad.data.data,
            }

        case VERIFY_USER_EMAIL:
            return {
                ...state,
                verifyEmail:action.payLoad.data.data,
            }

        case GET_USER_DETAILS:
            return {
                ...state,
                user:{...state.user,...action.payLoad.data.data},
            }

        default:
            return state;
    }
}