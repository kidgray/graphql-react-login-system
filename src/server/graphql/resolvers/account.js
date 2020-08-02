// Apollo's built-in Error for bad user input. Useful!
const { UserInputError } = require('apollo-server');

const Account = require('../../models/Account');
const { validateRegistrationInput, validateLoginInput } = require('../../../utils/validators');

module.exports = {
    Mutation: {
        async register(
            parent, 
            { registrationInput: { email, username, firstName, lastName, password, confirmPassword } }
        ) {
            // Validate the input data. Make sure no fields were left empty,
            // an actual email was provided, etc
            const { valid, errors } = validateRegistrationInput(email, username, firstName, lastName, password, confirmPassword);

            // If the data wasn't valid, throw a UserInputError showing the errors
            if (!valid) {
                throw new UserInputError('Input was bad', {
                    errors
                });
            }

            // Make sure the requested username isn't already taken by querying
            // the Mongo database for the specified username. This will return
            // null if the username isn't taken
            const user = await Account.findOne({ username });

            // If a user with the specified username is already in the DB
            if (user) {
                // Use Apollo Server's user input error type. Note the second argument
                // is a payload that can be used to display the error in the front end!
                throw new UserInputError('Username already exists in the DB', {
                    errors: {
                        username: 'This username is already taken!'
                    }
                });
            }

            // Create new Account object
            const newAcct = new Account({
                email,
                username,
                firstName,
                lastName,
                password
            });
            
            // Save the new object (document) to the DB. This is asynchronous
            const res = await newAcct.save();

            // Return the document to the user, along with the unique
            // ID created by the DB
            return {
                id: res._id,
                ...res._doc
            };
        },
        async login(
            parent, 
            { loginInput: { username, password } }
        ) {
            // Validate input data
            const { valid, errors } = validateLoginInput(username, password);

            // If login info wasn't valid, throw UserInputError showing errors
            if (!valid) {
                throw new UserInputError('Invalid login info.', {
                    errors
                });
            }

            // Check whether the username provided exists
            const user = await Account.findOne({ username });

            // If the username doesn't exist, can't log in (of course)
            if (!user) {
                // This is a special error case and isn't covered in
                // the validator function, so we add it here instead
                errors.misc = 'There is no account with that username.';

                throw new UserInputError('Username does not exist in the database.', {
                    errors
                });
            }

            // If the username exists, but the user entered the wrong password
            if (password !== user.password) {
                errors.misc = 'Incorrect password.';

                throw new UserInputError('Incorrect password', {
                    errors
                });
            }
            
            // If user entered valid data, return the corresponding Account
            // data
            return {
                id: user._id,
                ...user._doc
            }
        }
    }
};