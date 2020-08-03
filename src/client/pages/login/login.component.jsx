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
            <div className="row justify-content-center align-items-center">
                <h1 className='display-4 login-header'>LOGIN</h1>
            </div>

            <hr />

            { error && <p className='lead login-error'>{ error }</p> }

            <div className="form-div">
                <form className='' onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control signup-form__input" 
                                id="inputUsername" 
                                placeholder="Username" 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control signup-form__input" 
                                name="Password" 
                                id="inputPassword" 
                                placeholder="Password" 
                            />
                        </div>
                    </div>

                    <button className='btn btn-primary btn-lg'>Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;