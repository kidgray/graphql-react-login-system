import React from 'react';

const AccountPage = (props) => {
    return (
        <div>
            <h1>Welcome to your account, { props.firstName} { props.lastName }!</h1>
        </div>
    );
}

export default AccountPage;