import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import App from '../components/App'

const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
    </div>
  </BrowserRouter>
)

export default Router