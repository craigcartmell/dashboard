import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import App from '../components/containers/App'
import Default from '../components/containers/Dashboards/Default'
import CampaignsByBusinessUnit from '../components/containers/Dashboards/CampaignsByBusinessUnit'

const Router = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Default}/>
      <Route path="/campaigns-by-business-unit" component={CampaignsByBusinessUnit}/>
    </App>

  </BrowserRouter>
)

export default Router