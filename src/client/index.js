import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

require('./stylesheets/bundle.css')

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    // Additional fetch options like `credentials` or `headers`
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept("./router", () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require("./router").default

    ReactDOM.render(
      <ApolloProvider client={client}>
        <NextApp />
      </ApolloProvider>,
      document.getElementById("root")
    )
  })
}