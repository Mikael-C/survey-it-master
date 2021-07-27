import { INDEX_USERS, SHOW_USER } from '../actions/types';

const initialState = {
    users: {},
    user: {},
}

export default function userReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_USERS:
            return {
                ...state,
                users:action.payLoad.data.data,
            }

        case SHOW_USER:
            return {
                ...state,
                user:action.payLoad.data.data,
            }

        default:
            return state;
    }
}