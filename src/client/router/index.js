import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import App from '../components/containers/App'
import Default from '../components/containers/Dashboards/Default'
import CampaignsByBusinessUnitWithData from '../components/containers/Dashboards/CampaignsByBusinessUnitWithData'

const Router = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Default}/>
      <Route path="/campaigns-by-business-unit" component={CampaignsByBusinessUnitWithData}/>
    </App>

  </BrowserRouter>
)

export default Router