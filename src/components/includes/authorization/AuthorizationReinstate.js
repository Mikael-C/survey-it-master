import * as React from 'react';
import { useDispatch } from 'react-redux';
import { restoreLoggedInUserAction } from '../../../redux/actions/authActions';

export default function AuthorizationReinstate() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        // Get last login details, if any re-login user
        // dispatch(restoreLoggedInUserAction());
        return () => {}
    }, [dispatch]);

    return (null);
}
