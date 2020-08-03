import React, { useState } from 'react';

const SignUpPage = () => {
    // State Hook for errors that occur during registration
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Extract the user's desired acct. info from their
        // respective input fields in the form, making sure we
        // remove all whitespace from both ends of the string
        const email = event.target.elements.email.value.trim();
        const username = event.target.elements.username.value.trim();
        const firstName = event.target.elements.firstName.value.trim();
        const lastName = event.target.elements.lastName.value.trim();
        const password = event.target.elements.password.value.trim();
        const confirmPassword = event.target.elements.confirmPassword.value.trim();

        // If any of the input fields were left blank
        if (!email || !username || !firstName || !lastName || !password || !confirmPassword) {
            // Set the error state, causing the page to re-render and 
            // display the error to the user
            setError(() => 'One or more fields were left blank! Please fill out all the fields.');
        }

        // Here's where we should check whether the username already exists in the database.
        // If it does, then let the user know and set an error.

        // AT THIS POINT WE ASSUME THERE WERE NO ERRORS. 
        // Create a new account object. This will be sent to the Database later.
        const newAcct = {
            email,
            username,
            firstName,
            lastName,
            password,
            confirmPassword
        };
    }

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                <h1 className='register-header'>REGISTER AN ACCOUNT</h1>
            </div>

            <hr />

            { error && <p className='signup-error'>{ error }</p> }

            <div className="form-div">
                <form className='' onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control signup-form__input" 
                                name="email" 
                                id="inputEmail" 
                                placeholder="Email" 
                            />
                        </div>
                    </div>

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
                        <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control signup-form__input" 
                                name="firstName" 
                                id="inputFirstName" 
                                placeholder="First Name" 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control signup-form__input" 
                                name="lastName" 
                                id="inputLastName" 
                                placeholder="Last Name" 
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

                    <div className="form-group row">
                        <label htmlFor="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control signup-form__input" 
                                name="confirmPassword" 
                                id="inputConfirmPassword" 
                                placeholder="Confirm Password" 
                            />
                        </div>
                    </div>

                    <button className='btn btn-primary btn-lg'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;