// This will be used to validate a new user's registration input.
const validateRegistrationInput = (
    email,
    username,
    firstName,
    lastName,
    password,
    confirmPassword
) => {
    // We'll store all the errors in here.
    const errors = {};

    // Check whether e-mail field is empty
    if (email === '') {
        errors.email = 'Please enter an email address.';
    }
    // Check whether the e-mail field contains an actual e-mail
    else {
        // This RegEx is based on RFC 5322 and seems to capture
        // 99.99% of valid e-mail addresses, but of course, no
        // RegEx is perfect and some invalid addresses may slip through.
        // See: https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

        // If the e-mail address provided doesn't match the regex above, it's an invalid
        // address 
        if (!email.match(emailRegex)) {
            errors.email = 'Please enter a valid email address.';
        }
    }

    // If the username field was left empty
    if (username === '') {
        errors.username = 'Please enter a username.';
    }

    // If the firstName field was left empty
    if (firstName === '') {
        errors.firstName = 'Please enter your first name.';
    }

    // If the lastName field was left empty
    if (lastName === '') {
        errors.lastName = 'Please enter your last name.';
    }

    // If password field was left empty
    if (password === '') {
        errors.password = 'Please enter a password.'
    }
    // If the two password fields (password and confirmPassword)
    // don't match
    else if (password !== confirmPassword) {
        errors.password = 'Passwords do not match.'
    }

    return {
        // If there were no errors, the errors object should be empty
        valid: Object.keys(errors).length === 0,
        errors
    }
};

// Validate a user's login info. Mostly the same
// as the validator above, just with less fields
const validateLoginInput = (username, password) => {
    const errors = {};

    // If the username field was left empty
    if (username === '') {
        errors.username = 'Please enter a username.';
    }
    
    // If the password field was left empty
    if (password === '') {
        errors.password = 'Please enter a password.';
    }

    return {
        // If there were no errors, the errors object should be empty
        valid: Object.keys(errors).length === 0,
        errors
    }
}

module.exports = {
    validateRegistrationInput,
    validateLoginInput
};