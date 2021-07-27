import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {BACKGROUND_ONE} from '../images/images';
import Refreshing from '../includes/loaders/Refreshing';
import { storeASurveyQuestionAction } from '../../redux/actions/surveyQuestionActions';

export default function SetQuiz() {

    // Get passed in values form router state
    const location = useLocation();
    const { data } = location.state;

    const dispatch = useDispatch();
    const [surveyState, setSurveyState] = React.useState(data);
    const [input, setInput] = React.useState({type:'',difficulty:'',question:'',correct_answer:'',incorrect_answers:[]});

    const onSubmit = (input) => {
        setSurveyState({...surveyState,survey_question:[...surveyState.survey_question,input]});

        dispatch(storeASurveyQuestionAction({
            survey_id:surveyState.id,
            questions:[input]
        }));
    }

    const renderQuestions = (data) => {
        if (!data || data.length < 1) {
            return (
                <Refreshing message={'No question were found'} />
            )
        }

        return data.map((item,key)=>{
            return (
                <div key={key}>
                    <h4 className="h4 font-weight-bold mt-md">Question: {item.question}</h4>

                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <small className="text-uppercase text-muted font-weight-bold">Type: </small>
                        </div>
                        <div className="col-sm-9">
                            <h6 className="heading mb-0">{item.type}</h6>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <small className="text-uppercase text-muted font-weight-bold">Difficulty: </small>
                        </div>
                        <div className="col-sm-9">
                            <h6 className="heading mb-0">{item.difficulty}</h6>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <small className="text-uppercase text-muted font-weight-bold">Answers: </small>
                        </div>
                        <div className="col-sm-9">
                            <span className="heading mb-0">{item.correct_answer}, </span>
                            {item.incorrect_answers && item.incorrect_answers.length > 0  && item.incorrect_answers.map((item,key)=>{
                                return (
                                    <span key={key}>{item}, </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })
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
                                        <button className="btn btn-sm btn-info mr-4" data-toggle="modal" data-target="#modal-add-question">Add Question</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {renderQuestions(surveyState.survey_question)}
                            </div>
                            <div className="mt-5 py-5 border-top text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* edit survey question modal */}
            <div className="modal fade" id="modal-add-question" tabIndex={-1} role="dialog" aria-labelledby="modal-add-question" aria-hidden="true">
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
                                        <input className="form-control" placeholder="type" type="text" required onChange={(e)=>setInput({...input,type:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group focused">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Difficulty" type="text-area" required onChange={(e)=>setInput({...input,difficulty:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group focused">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Question" type="text-area" required onChange={(e)=>setInput({...input,question:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group focused">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Correct Answer" type="text-area" required onChange={(e)=>setInput({...input,correct_answer:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group focused">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-caps-small" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Incorrect Answers (Separate With Comma)" type="text-area" required onChange={(e)=>setInput({...input,incorrect_answers:e.target.value.split(',')})} />
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
