import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page404 extends Component {
    render() {
        return (
            <div class="container my-5">
                <div className="my-5 text-center">
                <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <img src="assets/404page.png" className="img-fluid" alt="404 error" />
                    </div>
                </div>
                    <h2 className="my-2">404 Page Not Found</h2>
                    <p><strong>Ooops! </strong>The page you are looking for isn't available right now! Please contact Admin</p>
                    <Link to="/"><h3>Go Back - Home</h3></Link>
                </div>
            </div>
        )
    }
}
