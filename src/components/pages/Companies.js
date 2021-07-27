import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompaniesAction } from '../../redux/actions/companyActions';
import Table from '../pages/Table'

export default function Companies(){

    const dispatch = useDispatch();
    const userState = useSelector(state => state.companies);

    React.useEffect(() => {
        dispatch(getCompaniesAction({properties:1}));
    }, [dispatch]);

    const renderCompanies = (data) => {
        if( !data.data || data.data.lenght < 1)
 {
            return null;
        }

        console.log('----00000---',data);

        return (<Table data={data.data} />);

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
                            {renderCompanies(userState.companies)}
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