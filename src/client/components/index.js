import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

// COMPONENTS & PAGES
import App from './app/app.component.jsx';

// ROUTERS
import AppRouter from '../routers/AppRouter';

// Instantiate an Apollo Link for use w/ Apollo Client
const httpLink = createHttpLink({
    uri: 'http://localhost:5050'
});

// Create the instance of ApolloClient
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});


const ApolloApp = () => {
    return (
        <ApolloProvider client={client}>
            <AppRouter>
                <App />
            </AppRouter>
        </ApolloProvider>
    );
}

export default ApolloApp;