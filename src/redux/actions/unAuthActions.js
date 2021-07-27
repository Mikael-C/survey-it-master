import { LOGOUT_USER, REFRESHED_TOKEN} from './types';
import { updatePersistedLastLogin, destroyLastLogin} from '../../support/sessionSupport';

export const logoutUserLocallyAction = () => {
    return (dispatch) => {
        destroyLastLogin();
        localStorage.clear();
        dispatch({type: LOGOUT_USER, payLoad: {}});
    }
}

export const refreshUserTokenLocallyAction = (payLoad) => {
    return (dispatch) => {
        updatePersistedLastLogin(payLoad);
        dispatch({type: REFRESHED_TOKEN, payLoad: payLoad});
    }
}