import * as React from 'react';
import {OFFICE_SPACE} from '../images/images'

export default function Landing() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="section section-hero section-shaped">
                    <div className="shape shape-style-3 shape-default">
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
                                        <h1 className="text-white display-1">Check It Survey</h1>
                                        <h2 className="display-4 font-weight-normal text-white">Legacy Survey System!</h2>
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
                <div className="section features-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="info info-horizontal info-hover-primary">
                                    <div className="description pl-4">
                                        <h5 className="title">For Developers</h5>
                                        <p>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now.</p>
                                        <a href="/#" className="text-info">Learn more</a>
                                    </div>
                                </div>
                                <div className="info info-horizontal info-hover-primary mt-5">
                                    <div className="description pl-4">
                                        <h5 className="title">For Designers</h5>
                                        <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                                        <a href="/#" className="text-info">Learn more</a>
                                    </div>
                                </div>
                                <div className="info info-horizontal info-hover-primary mt-5">
                                    <div className="description pl-4">
                                        <h5 className="title">For Beginners</h5>
                                        <p>That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. If everything I did failed - which it doesn't.</p>
                                        <a href="/#" className="text-info">Learn more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-10 mx-md-auto">
                                <img className="ml-lg-5" alt="office space" src={OFFICE_SPACE} width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section features-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto text-center">
                                <span className="badge badge-primary badge-pill mb-3">Insight</span>
                                <h3 className="display-3">Full-Funnel Social Analytics</h3>
                                <p className="lead">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                        <i className="ni ni-settings-gear-65" />
                                    </div>
                                    <h6 className="info-title text-uppercase text-primary">Social Conversations</h6>
                                    <p className="description opacity-8">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                                    <a href="/#" className="text-primary">More about us
                                        <i className="ni ni-bold-right text-primary" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                                        <i className="ni ni-atom" />
                                    </div>
                                    <h6 className="info-title text-uppercase text-success">Analyze Performance</h6>
                                    <p className="description opacity-8">Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                                    <a href="/#" className="text-primary">Learn about our products
                                        <i className="ni ni-bold-right text-primary" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                                        <i className="ni ni-world" />
                                    </div>
                                    <h6 className="info-title text-uppercase text-warning">Measure Conversions</h6>
                                    <p className="description opacity-8">What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                                    <a href="/#" className="text-primary">Check our documentation
                                        <i className="ni ni-bold-right text-primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/><br/>
            </div>
        </React.Fragment>
    )
}