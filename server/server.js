// # IMPORT: express package
const express = require('express');
const cors = require('cors');

// # IMPORT: ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth')

// #IMPORT: the two parts of a GraphQL schema
const { typeDefs, resolvers, dateScalar } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// #INITIALIZE: app variable to the value of express()
const app = express();

// #INITIALIZE: server variable as a new ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dateScalar,
  context: authMiddleware,
});

// #Middleware: parsing JSON and urlencoded form data

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// #IF: we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  console.log('asd')
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// #GET Route for homepage
app.use('/api', require('./api.routes'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// #CREATE: a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// #CALL: the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
