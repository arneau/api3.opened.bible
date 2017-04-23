import React from 'react'
import { render } from 'react-dom'

import GraphiQL from 'graphiql'

function graphQLFetcher (params) {
  return fetch('/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(response => response.json())
}

render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('wrapper'))