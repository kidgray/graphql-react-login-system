import React from 'react';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-1 not-found-header">404: NOT FOUND</h1>
            <hr />
            <p className="lead not-found-msg">The page you're looking for was not found.</p>

            <button class="btn btn-primary not-found-button"> Home </button>
        </div>
    )
};

export default NotFoundPage;