import React from 'react';
import { ApolloServer, gql } from 'apollo-server';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// COMPONENTS & PAGES
import SignUpPage from '../pages/signup/signup.component.jsx';
import LoginPage from '../pages/login/login.component.jsx';
import AccountPage from '../pages/account/account.component.jsx';

// Set up GraphQL Schema (types & resolvers)
const typeDefs = gql`
    # The "Query" type lists all available queries that clients
    # can execute, along with the return types of those queries 
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello World'
    }
};

// Create instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server
server.listen({port: 8080}).then(res => {
    console.log(`Server running at ${res.url}`);
});

const App = () => {
    return (
        <div>
            <LoginPage />
        </div>
    );
}

export default App;