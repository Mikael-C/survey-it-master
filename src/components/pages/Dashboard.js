import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BACKGROUND_ONE } from '../images/images';
import Refreshing from '../includes/loaders/Refreshing';
import { showMySurveyAction, storeASurveyAction } from '../../redux/actions/surveyActions';

export default function Dashboard() {

    const dispatch = useDispatch();
    const surveyState = useSelector(state => state.survey);
    const [input, setInput] = React.useState({name:'',description:''});

    React.useEffect(() => {
        dispatch(showMySurveyAction());
    }, [dispatch]);

    const onSubmit = (input) => {
        dispatch(storeASurveyAction(input, ()=>dispatch(showMySurveyAction())));
    }

    const renderSurveyList = (data) => {
        if (!data.data || data.data.length < 1) {
            return (
                <Refreshing message={'No surveys were found'} />
            )
        }

        return (
            <div style={{width:'100%'}}>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Link</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((item,key)=>{
                            return(
                                <tr key={key}>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">{item.name}</td>
                                    <td className="text-center">{process.env.REACT_APP_PUBLIC_URL}/take-quiz/{item.id}</td>
                                    <td className="text-center">{new Date(item.created_at).toDateString()}</td>
                                    <td className="text-center">
                                        <Link to={{pathname:'/set-quiz', state:{data:item}}} className="btn btn-icon btn-primary btn-sm" type="button">Edit</Link>
                                        <Link to={{pathname:'/result', state:{data:item}}} className="btn btn-icon btn-primary btn-sm" type="button">Results</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <React.Fragment>
            <section className="section-profile-cover section-shaped my-0">
                {/* Circles background */}
                <img className="bg-image" alt="background" src={BACKGROUND_ONE} style={{width: '100%'}} />

                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                    <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon className="fill-secondary" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <div className="card card-profile shadow mt--300">
                        <div className="px-4">
                            <div className="row justify-content-center">
                                <div style={{width: '60%'}}>
                                </div>
                                <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                    <div className="card-profile-actions py-4 mt-lg-0">
                                        <button className="btn btn-sm btn-info mr-4" data-toggle="modal" data-target="#modal-create-survey">Create Survey</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {renderSurveyList(surveyState.userSurvey)}
                            </div>
                            <div className="mt-5 py-5 border-top text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* create survey modal */}
            <div className="modal fade" id="modal-create-survey" tabIndex={-1} role="dialog" aria-labelledby="modal-create-survey" aria-hidden="true">
                <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">Type your modal title</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group mb-3">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Survey Name" type="text" required onChange={(e)=>setInput({...input,name:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group focused">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="description" type="text-area" required onChange={(e)=>setInput({...input,description:e.target.value})} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link  ml-auto" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>onSubmit(input)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
