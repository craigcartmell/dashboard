import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsByBusinessUnitChart from '../../../../components/presentational/Dashboards/CampaignsByBusinessUnitChart'

const campaignsByBusinessUnitQuery = gql`
  query campaignsByBusinessUnitQuery {
    campaignsByBusinessUnit(offset: 0, limit: 999) {
      id
      campaigns(limit:999) {
        id
      }
    }
  }
 `

const CampaignsByBusinessUnitChartWithData = graphql(campaignsByBusinessUnitQuery)(CampaignsByBusinessUnitChart)

export default CampaignsByBusinessUnitChartWithData