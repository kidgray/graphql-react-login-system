const { gql } = require('apollo-server');

// Set up GraphQL Schema (types & resolvers)
const typeDefs = gql`
    # This type represents the various fields the user must
    # fill out upon registration (based on project specs provided,
    # i.e. email, name, username, password), 
    # which will be provided as input to the register mutation
    input RegistrationFields {
        email: String!
        username: String!
        firstName: String!
        lastName: String!
        password: String!
        confirmPassword: String!
    }

    # This type represents the fields the user must fill out
    # upon logging in (i.e. username and password). Made for
    # consistency purposes, since I have a RegistrationFields
    # input type
    input LoginFields {
        username: String!
        password: String!
    }

    # This type represents the users' accounts
    type Account {
        id: ID!
        email: String!
        username: String!
        firstName: String!
        lastName: String!
    }

    # The "Query" type lists all available queries that clients
    # can execute, along with the return types of those queries
    type Query {
        sayHi: String!
    }

    # The "Mutation" type lists all available mutations that
    # clients can execute, and their return types
    type Mutation {
        register(registrationInput: RegistrationFields): Account!
        login(loginInput: LoginFields): Account!
    }
`;

module.exports = typeDefs;