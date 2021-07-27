import { INDEX_COURIERS, SHOW_COURIER } from '../actions/types';

const initialState = {
    couriers: {},
    courier: {},
}

export default function courierReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_COURIERS:
            return {
                ...state,
                couriers:action.payLoad.data.data,
            }

        case SHOW_COURIER:
            return {
                ...state,
                courier:action.payLoad.data.data,
            }

        default:
            return state;
    }
}