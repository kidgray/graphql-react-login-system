import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const LoginPage = (props) => {
    // State Hook for the Login Fields.
    const [fields, setFields] = useState({
        username: '',
        password: ''
    });

    // State Hook for errors that might occur during login (incorrect info, etc)
    const [errors, setErrors] = useState({});

    // GraphQL Mutation for logging in to an account
    const LOGIN_ACCT = gql`
        mutation login(
            $username: String!
            $password: String!
        ) {
            login(
                loginInput: {
                    username: $username
                    password: $password
                }
            ) {
                id
                email
                username
                firstName
                lastName
            }
        }
    `;

    // Mutation Hook for logging in users.
    const [loginAcct, { loading }] = useMutation(LOGIN_ACCT, {
        update(proxy, result) {
            // Redirect user to their newly created Account page, making
            // sure to pass the user's first name and last name (stored
            // in the result of the loginAcct Mutation). 
            props.history.push({
                pathname: '/account',
                state: {
                    firstName: result.data.login.firstName,
                    lastName: result.data.login.lastName
                }
            });
        },
        onError(err) {
            // Populate errors object
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: fields
    })

    const handleSubmit = (event) => {
        // Prevent default form entry
        event.preventDefault();

        // Execute the loginAcct mutation
        loginAcct();
    };

    const onChange= (event) => {
        // Same idea as the onChange function for
        // the SignUp Component.
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                <h1 className='display-4 login-header'>LOGIN</h1>
            </div>

            <hr />

            { 
                Object.keys(errors).length > 0 && (
                    Object.values(errors).map(error => <p key={error} className='lead signup-error'>{ error }</p>)
                )
            }

            <div className="form-div">
                <form className='' onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control signup-form__input" 
                                id="inputUsername" 
                                name="username"
                                placeholder="Username"
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control signup-form__input" 
                                name="password" 
                                id="inputPassword" 
                                placeholder="Password"
                                onChange={onChange}
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