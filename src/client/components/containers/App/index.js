import React from 'react'
import {Route} from 'react-router-dom'
import styles from './app.css'

import Default from '../Dashboards/Default'
import CampaignsByBusinessUnitWithData from '../Dashboards/CampaignsByBusinessUnitWithData'

const App =() =>
  <div className={styles.component}>
    <Route component={Default}/>
    <Route path="campaigns-by-business-unit" component={CampaignsByBusinessUnitWithData}/>
  </div>

export default App