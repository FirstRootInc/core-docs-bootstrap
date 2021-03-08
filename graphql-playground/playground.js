import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'graphql-playground'

ReactDOM.render(
  <Playground endpoint='http://api-staging.firstroot.co/graphiql' />,
  document.body,
)