import * as React from 'react';
import { BACKGROUND_ONE } from '../images/images';
import { AuthorizationMonitor } from '../includes/authorization/AuthorizationMonitor';

export default function Dashboard() {

    return (
        <React.Fragment>
            <AuthorizationMonitor />
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
                        <h1>Hello World</h1>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
