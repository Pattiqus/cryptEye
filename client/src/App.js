import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import FooterLayout from './components/layouts/FooterLayout'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Dashboard from './components/pages/Dashboard'
import NavLayout from './components/layouts/NavLayout';
import Auth from './utils/auth';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavLayout/>
            <Routes>
                <Route path='/' element={Auth.loggedIn() ? <Navigate replace to='/dashboard'/> : <Home/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
          <FooterLayout/>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
