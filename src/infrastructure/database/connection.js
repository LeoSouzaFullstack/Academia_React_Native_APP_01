const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello from GraphQL'
    }
};

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer();