import { INDEX_ORDERS, SHOW_ORDER } from '../actions/types';

const initialState = {
    orders: {},
    order: {},
}

export default function orderReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_ORDERS:
            return {
                ...state,
                orders:action.payLoad.data.data,
            }

        case SHOW_ORDER:
            return {
                ...state,
                order:action.payLoad.data.data,
            }

        default:
            return state;
    }
}