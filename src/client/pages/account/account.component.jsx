import React from 'react';

const AccountPage = (props) => {
    const firstName = props.location.state 
                      ? props.location.state.firstName 
                      : "";

    const lastName = props.location.state 
                     ? props.location.state.lastName 
                     : "";

    return (
        <div className="row justify-content-center align-items-center">
            <h1 className='display-2 account-header'>
                Welcome to your account {firstName} {lastName}!
            </h1>
        </div>
    );
}

export default AccountPage;