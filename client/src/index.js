import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider, useQuery } from "@apollo/client"
import client from "./services/graphQL/client";

ReactDOM.render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')

)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
