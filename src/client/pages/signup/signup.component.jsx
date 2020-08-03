import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SignUpPage = (props) => {
    // State Hook for the registration fields
    const [fields, setFields] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });

    // State Hook for errors that occur during registration
    const [errors, setErrors] = useState({});

    // GraphQL Mutation for registering new accounts
    const REGISTER_ACCT = gql`
        mutation register(
            $email: String!
            $username: String!
            $firstName: String!
            $lastName: String!
            $password: String!
            $confirmPassword: String!
        ) {
            register(
                registrationInput: {
                    email: $email
                    username: $username
                    firstName: $firstName
                    lastName: $lastName
                    password: $password
                    confirmPassword: $confirmPassword
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

    // Mutation Hook for registering new users. useMutation()
    // takes an optional second argument. In it, you can pass
    // an update function which can modify the Apollo Client cache data
    // to match the modifications made to the back-end, as well as the variables
    // property, which allows you to specify GraphQL variables that the mutation needs
    // (In this case, that's just the registration fields).
    const [registerAcct, { loading }] = useMutation(REGISTER_ACCT, {
        update(proxy, result) {
            // Redirect user to their newly created Account page
            props.history.push({
                pathname: '/account',
                state: {
                    firstName: fields.firstName,
                    lastName: fields.lastName
                }
            });
        },
        onError(err) {
            // The first item in the graphQLErrors object
            // contains the properties we need (check the 
            // docs). Populate the errors state variable here.
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: fields
    });

    const onChange = (event) => {
        // Use computed property keys here to make the function
        // applicable to all fields
       setFields({
           ...fields,
           [event.target.name]: event.target.value
       });
    };

    const handleSubmit = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Execute the registerAcct mutation
        registerAcct();
    };

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                <h1 className='display-4 signup-header'>REGISTER</h1>
            </div>

            <hr />

            { 
                Object.keys(errors).length > 0 && (
                    Object.values(errors).map(error => <p key={error} className='lead signup-error'>{ error }</p>)
                )
            }

            <div className={loading ? "spinner-border spinner-size" : "form-div"}>
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
                                onChange={onChange}
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
                                name='username'
                                placeholder="Username"
                                onChange={onChange} 
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
                                onChange={onChange}
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

                    <div className="form-group row">
                        <label htmlFor="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control signup-form__input" 
                                name="confirmPassword" 
                                id="inputConfirmPassword" 
                                placeholder="Confirm Password"
                                onChange={onChange} 
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