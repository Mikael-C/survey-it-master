import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Refreshing from '../includes/loaders/Refreshing';
import { showASurveyAction } from '../../redux/actions/surveyActions';

export default function TakeQuiz() {

    // Get passed in values form router state
    const { id } = useParams();

    const dispatch = useDispatch();
    const survey = useSelector(state => state.survey)
    // const [input, setInput] = React.useState({});

    React.useEffect(() => {
        dispatch(showASurveyAction({id:id}));
    }, [dispatch,id]);

    // const onSubmit = (input) => {
        
    // }

    const renderQuestions = (data) => {
        if (!data.data || data.data.length < 1) {
            return (
                <Refreshing message={'No survey was found'} />
            )
        }

        return data.data.map((item,key)=>{
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
            <div className="section section-hero section-shaped">
                <div className="shape shape-style-1 shape-primary">
                    <span className="span-150" />
                    <span className="span-50" />
                    <span className="span-50" />
                    <span className="span-75" />
                    <span className="span-100" />
                    <span className="span-75" />
                    <span className="span-50" />
                    <span className="span-100" />
                    <span className="span-50" />
                    <span className="span-100" />
                </div>
                <div className="page-header">
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <p className="lead text-white">{survey.survey.data && survey.survey.data.data && survey.survey.data.data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </div>
            {renderQuestions(survey.survey)}

        </React.Fragment>
    )
}
