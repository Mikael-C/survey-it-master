import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/actions/userActions';
import { AuthorizationMonitor } from '../includes/authorization/AuthorizationMonitor';
// import Table from '../pages/Table'

export default function Users(){

    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users);

    React.useEffect(() => {
        dispatch(getUsersAction({properties:1}));
    }, [dispatch]);

    const renderUsers = (data) => {
        if ( !data.data || data.data.length < 1){
            return null;
        }

        return data.data.map((item,key)=>{
            return(
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.created_at}</td>
                    <td>{item.blocked}</td>
                </tr>
            )
        });
    }

    return (
        <div>
        <AuthorizationMonitor />
            {/* Begin Page Content */}
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the 
                    <a target="_blank" rel="noreferrer" href="https://datatables.net">official DataTables documentation</a>
                </p>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Users</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>Status</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {renderUsers(usersState.users)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}