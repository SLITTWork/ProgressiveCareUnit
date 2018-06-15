import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FirstPage.css';

export default class FirstPage extends Component {

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-4 mb-2">Progressive Care Unit</h1>
                                <p className="lead mb-5">
                                    We always try to give our best.
                                </p>
                                <hr />
                                <Link to="/feedback" className="btn btn-lg btn-info mr-5 width-150">
                                    Feedback<br/>
                                    <span className="very-small-font">For anyone</span>
                                </Link>
                                <Link to="/login" className="btn btn-lg btn-light width-150">
                                    Login<br/>
                                    <span className="very-small-font">For staff</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
