const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors');

// Get a Port from Heroku for Deployment. If Heroku isn't available
// for whatever reason, default to port 5050.
const port = process.env.PORT || 5050;

const { MONGODB_CONN_STRING } = require('../../config.js');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index');

// Create instance of ApolloServer
const server = new ApolloServer({ cors: true, typeDefs, resolvers });

// Connect to MongoDB
mongoose.connect(MONGODB_CONN_STRING, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    // Announce MongoDB connection success
    console.log('MongoDB connected successfully!');

    // Start the Apollo Server
    return server.listen({ port });
})
.then((res) => {
    console.log(`Server running at ${res.url}`);
})
.catch((err) => {
    console.log(err);
});