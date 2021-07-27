import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersAction } from '../../redux/actions/orderActions';
import Table from '../pages/Table';

export default function Orders(){

    const dispatch = useDispatch();
    const userState = useSelector(state => state.orders);

    React.useEffect(() => {
        dispatch(getOrdersAction({properties:1}));
    }, [dispatch]);

    const renderOrders = (data) => {
        if( !data.data || data.data.lenght < 1)
 {
            return null;
        }

        console.log('----ODERS---',data);

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
            {/* Begin Page Content */}
                <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the <a target="_blank" rel="noreferrer" href="https://datatables.net">official DataTables documentation</a>.</p>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                            {renderOrders(userState.orders)}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
                {/* /.container-fluid */}

        </div>
    )
}