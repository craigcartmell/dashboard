import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import App from '../components/containers/App'
import Default from '../components/containers/Dashboards/Default'
import CampaignsByBusinessUnit from '../components/containers/Dashboards/CampaignsByBusinessUnit'
import CampaignsUpcoming from "../components/containers/Dashboards/CampaignsUpcoming"

const Router = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Default}/>
      <Route path="/campaigns-by-business-unit/:pageNumber?" component={CampaignsByBusinessUnit}/>
      <Route path="/campaigns-upcoming" component={CampaignsUpcoming}/>
    </App>

  </BrowserRouter>
)

export default Router