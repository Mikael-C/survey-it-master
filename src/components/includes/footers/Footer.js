import * as React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row row-grid align-items-center mb-5">
                        <div className="col-lg-6">
                            <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                            <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                        </div>
                        <div className="col-lg-6 text-lg-center btn-wrapper">
                            <button target="_blank" href="https://twitter.com/VictorOkonkwo47?s=09" rel="nofollow" className="btn btn-icon-only btn-twitter rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
                                <span className="btn-inner--icon"><i className="fa fa-twitter" /></span>
                            </button>
                            <button target="_blank" href="https://web.facebook.com/victor.okonkwo.3150807" rel="nofollow" className="btn-icon-only rounded-circle btn btn-facebook" data-toggle="tooltip" data-original-title="Like us">
                                <span className="btn-inner--icon"><i className="fab fa-facebook" /></span>
                            </button>
                            <button target="_blank" href="https://gitlab.com/victorokonkwo47" rel="nofollow" className="btn btn-icon-only btn-dribbble rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
                                <span className="btn-inner--icon"><i className="fa fa-gitlab" /></span>
                            </button>
                            <button target="_blank" href="https://github.com/https://github.com/victorokonkwo47" rel="nofollow" className="btn btn-icon-only btn-github rounded-circle" data-toggle="tooltip" data-original-title="Star on Github">
                                <span className="btn-inner--icon"><i className="fa fa-github" /></span>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="row align-items-center justify-content-md-between">
                        <div className="col-md-6">
                            <div className="copyright">
                                © 2021 <a href="/" target="_blank">Survey It</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav nav-footer justify-content-end">
                                <li className="nav-item">
                                    <a href="/" className="nav-link" target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}