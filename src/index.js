import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import cache from './cache';
import Input from './container/input';
import List from './container/list';
import './index.css';

const client = new ApolloClient({ cache, connectToDevTools: true });

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Input />
      <List />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
