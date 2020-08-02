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
            <h1>REGISTER AN ACCOUNT</h1>

            { error && <p className='signup-error'>{ error }</p> }

            <p>Please enter the following data: </p>

            <form className='signup-form' onSubmit={handleSubmit}>
                Email: <input type='input' className='signup-form__input' name='email' placeholder: 'Email'
                Username: <input type='input' className='signup-form__input' name='username' placeholder='Username' />
                First Name: <input type='input' className='signup-form__input' name='firstName' placeholder='First Name' />
                Last Name: <input type='input' className='signup-form__input' name='lastName' placeholder='Last Name' />
                Password: <input type='input' className='signup-form__input' name='password' placeholder='Password' />
                Confirm Password: <input type='input' className='signup-form__input' name='confirmPassword' placeholder='Confirm Password' />

                
                <button className='button'>Register!</button>
            </form>
        </div>
    );
};

export default SignUpPage;