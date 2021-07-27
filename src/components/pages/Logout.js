import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import ChaseAnimation from '../animations/chaseAnimation';
import { logoutUserAction } from '../../redux/actions/authActions';

export default function Logout() {

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

    React.useEffect(() => {
        dispatch(logoutUserAction());
    }, [dispatch]);

    return (
        <React.Fragment>
            {!authState.user.id?<Redirect to={{pathname:"/login"}} />:null}
            <div style={{textAlign:'center', marginTop:'20%'}}>
                <div style={{marginLeft:'47%'}}>
                    <ChaseAnimation />
                </div>
                <h3 className="text-uppercase font-weight-bold">Logging Out</h3>
            </div>
        </React.Fragment>
    )
}
