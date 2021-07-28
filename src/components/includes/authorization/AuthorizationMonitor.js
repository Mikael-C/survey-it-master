import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const AuthorizationMonitor = () => {

    const [shouldRedirect, setShouldRedirect] = React.useState(false);
    const authState = useSelector(state => state.auth);

    React.useEffect(() => {
        if (!authState.user || authState.user === {}) {
            setShouldRedirect(true);
        }
    }, [authState]);

    return (
        <React.Fragment>
            {shouldRedirect && <Redirect to="/" />}
        </React.Fragment>
    );
}