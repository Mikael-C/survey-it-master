const sessionName = process.env.REACT_APP_SLUG+'_session';

const persistLastLogin = (payLoad) => {
    return localStorage.setItem(sessionName, JSON.stringify(payLoad));
}

const retrievePersistedLastLogin = async () => {
    return JSON.parse(await localStorage.getItem(sessionName));
}

const updatePersistedLastLogin = async (payLoad) => {
    let currentSession = JSON.parse(await localStorage.getItem(sessionName));
    return localStorage.setItem(sessionName, JSON.stringify({
        ...currentSession,
        data:{
            ...currentSession.data,
            data:{
                ...currentSession.data.data,
                ...payLoad.data.data
            }
        }
    }));
}

const destroyLastLogin = () => {
    return localStorage.removeItem(sessionName);
}

export {persistLastLogin, retrievePersistedLastLogin, updatePersistedLastLogin, destroyLastLogin};