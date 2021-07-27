import { INDEX_COMPANIES, SHOW_COMPANY } from '../actions/types';

const initialState = {
    companies: {},
    company: {},
}

export default function companyReducer (state=initialState, action) {

    switch (action.type) {
        case INDEX_COMPANIES:
            return {
                ...state,
                companies:action.payLoad.data.data,
            }

        case SHOW_COMPANY:
            return {
                ...state,
                company:action.payLoad.data.data,
            }

        default:
            return state;
    }
}