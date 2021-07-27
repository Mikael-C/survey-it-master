import * as React from 'react';
import { useSelector } from 'react-redux';
import { NAV_BAR_LOGO_ONE } from '../../images/images';

export default function TopNavBar() {
    const auth = useSelector(state => state.auth);

    return (
        <React.Fragment>
            {/* Navbar */}
            <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
                <div className="container">
                    <a className="navbar-brand mr-lg-5" href="/">
                        <img alt='logo' src={NAV_BAR_LOGO_ONE}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/">
                                        <img alt="logo" src={NAV_BAR_LOGO_ONE} />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                                        <span />
                                        <span />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                            <li className="nav-item dropdown">
                                <a href="/#" className="nav-link" data-toggle="dropdown" role="button">
                                    <i className="ni ni-ui-04 d-lg-none" />
                                    <span className="nav-link-inner--text">Get Started</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-xl">
                                    <div className="dropdown-menu-inner">
                                        <a href="/" className="media d-flex align-items-center">
                                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                <i className="ni ni-spaceship" />
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="heading text-primary mb-md-1">Getting started</h6>
                                                <p className="description d-none d-md-inline-block mb-0">Learn how to use survey it, create your survey and more.</p>
                                            </div>
                                        </a>
                                        <a href="/register" className="media d-flex align-items-center">
                                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                <i className="ni ni-palette" />
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="heading text-primary mb-md-1">Create A Survey</h6>
                                                <p className="description d-none d-md-inline-block mb-0">Register to create your own survey and share links to others</p>
                                            </div>
                                        </a>
                                        <a href="/login" className="media d-flex align-items-center">
                                            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                <i className="ni ni-ui-04" />
                                            </div>
                                            <div className="media-body ml-3">
                                                <h5 className="heading text-warning mb-md-1">View Survey Results</h5>
                                                <p className="description d-none d-md-inline-block mb-0">Login to view survey results.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/#" className="nav-link" data-toggle="dropdown" role="button">
                                    <i className="ni ni-collection d-lg-none" />
                                    <span className="nav-link-inner--text">Survey It</span>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="/dashboard" className="dropdown-item">Dashboard</a>
                                    <a href="/login" className="dropdown-item">Login</a>
                                    <a href="/register" className="dropdown-item">Register</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto d-none d-lg-flex">
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://web.facebook.com/victor.okonkwo.3150807" rel="noreferrer" target="_blank" data-toggle="tooltip" title="Like us on Facebook">
                                <i className="fa fa-facebook-square" />
                                <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://gitlab.com/victorokonkwo47" rel="noreferrer" target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                                <i className="fa fa-gitlab" />
                                <span className="nav-link-inner--text d-lg-none">Gitlab</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://twitter.com/VictorOkonkwo47?s=09" rel="noreferrer" target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                                <i className="fa fa-twitter-square" />
                                <span className="nav-link-inner--text d-lg-none">Twitter</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://github.com/https://github.com/victorokonkwo47" rel="noreferrer" target="_blank" data-toggle="tooltip" title="Star us on Github">
                                <i className="fa fa-github" />
                                <span className="nav-link-inner--text d-lg-none">Github</span>
                                </a>
                            </li>

                            {auth.user.id?
                                <React.Fragment>
                                    <li className="nav-item">
                                        <a className="btn btn-neutral" href="/dashboard">
                                            <span className="nav-link-inner--text">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a href="/logout" className="btn btn-neutral btn-icon">
                                            <span className="nav-link-inner--text">Logout</span>
                                        </a>
                                    </li>
                                </React.Fragment>
                            :null}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar */}
        </React.Fragment>
    )
}