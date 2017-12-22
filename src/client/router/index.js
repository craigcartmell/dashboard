import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import App from '../components/containers/App'
import Default from '../components/containers/Dashboards/Default'
import CampaignsByBusinessUnit from '../components/containers/Dashboards/CampaignsByBusinessUnit'
import CampaignsByBusinessUnitChart from '../components/containers/Dashboards/CampaignsByBusinessUnitChart'
import CampaignsUpcoming from "../components/containers/Dashboards/CampaignsUpcoming"
import CampaignsByDynamicDataSource from '../components/containers/Dashboards/CampaignsByDynamicDataSource'

const Router = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Default}/>
      <Route path="/campaigns-upcoming" component={CampaignsUpcoming}/>
      <Route exact path="/campaigns-by-business-unit-chart" component={CampaignsByBusinessUnitChart}/>
      <Route path="/campaigns-by-business-unit/:pageNumber?" component={CampaignsByBusinessUnit}/>
      <Route path="/campaigns-by-dynamic-data-source/:pageNumber?" component={CampaignsByDynamicDataSource}/>
    </App>

  </BrowserRouter>
)

export default Router