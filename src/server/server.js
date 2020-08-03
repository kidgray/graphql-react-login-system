const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors');

const { MONGODB_CONN_STRING } = require('../../config.js');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index');

// Create instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Connect to MongoDB
mongoose.connect(MONGODB_CONN_STRING, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    // Announce MongoDB connection success
    console.log('MongoDB connected successfully!');

    // Start the Apollo Server
    return server.listen({port: 5050});
})
.then((res) => {
    console.log(`Server running at ${res.url}`);
});