import React from 'react';

const NotFoundPage = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-1 not-found-header">404: NOT FOUND</h1>
            <hr />
            <p className="lead not-found-msg">The page you're looking for was not found.</p>

            <button className="btn btn-primary not-found-button" onClick={() => props.history.push('/')}> 
                Home 
            </button>
        </div>
    )
};

export default NotFoundPage;