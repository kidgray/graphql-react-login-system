const { model, Schema } = require('mongoose');

// Create schema for the Accounts 
const accountSchema = new Schema({
    email: String,
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

// Export the Account model
module.exports = model('Account', accountSchema);