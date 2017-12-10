import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsByBusinessUnit from '../../../../components/presentational/Dashboards/CampaignsByBusinessUnit'

const campaignsByBusinessUnitQuery = gql`
  query campaignsByBusinessUnitQuery {
    campaignsByBusinessUnit(limit:100) {
      id
      name
      campaigns {
        id
        name
        created_at
      }
    }
  }
 `

const CampaignsByBusinessUnitWithData = graphql(campaignsByBusinessUnitQuery)(CampaignsByBusinessUnit);

export default CampaignsByBusinessUnitWithData