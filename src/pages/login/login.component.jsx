import React, { useState } from 'react';

const LoginPage = () => {
    // State Hook for errors that might occur during login (incorrect info, etc)
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        // Prevent default form entry
        event.preventDefault();

        // Extract the user's login info from their respective
        // fields
        const username = event.target.elements.username.value.trim();
        const password = event.target.elements.password.value.trim();

        // If either of the fields was left blank
        if (!username || !password) {
            setError(() => 'One or more fields is blank. Please fill out both fields!');
        }

        // Create an account object that will be checked against the Database
        const acct = {
            username,
            password
        };

        // This is where we'd send the query
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type='input' className='login-form__input' name='username' placeholder='Username' />
                <input type='input' className='login-form__input' name='password' placeholder='Password' />

                <button className='button'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;