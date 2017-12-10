import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import App from '../components/containers/App'

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={App}/>
  </BrowserRouter>
)

export default Router