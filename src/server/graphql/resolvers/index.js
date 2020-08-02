const accountResolver = require('./account');

const resolvers = {
    Query: {
        // Use Spread operator to Spread all your modelResolver.Query here
    },
    Mutation: {
        // Use Spread operator to Spread all modelResolver.Mutation here
        ...accountResolver.Mutation
    }
}

module.exports = resolvers;