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
        client {
          name
        }
      }
    }
  }
 `

export default graphql(campaignsByBusinessUnitQuery)(CampaignsByBusinessUnit);