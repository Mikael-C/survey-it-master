import * as React from 'react';
import { NAV_BAR_LOGO_ONE } from '../images/images';

export default function Missing() {
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
                                    <img alt="logo" src={NAV_BAR_LOGO_ONE} style={{width: '200px'}} className="img-fluid" />
                                    <p className="lead text-white">We Could Not Find The Page You Requested</p>
                                    <div className="mt-5">
                                        <small className="font-weight-bold mb-0 mr-2 text-white">*proudly coded by</small>
                                        <span className="text-white">Victor Okonkwo</span>
                                    </div>
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
        </React.Fragment>
    )
}