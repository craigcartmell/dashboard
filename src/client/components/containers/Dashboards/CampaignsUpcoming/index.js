import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsUpcoming from '../../../../components/presentational/Dashboards/CampaignsUpcoming'

const campaignsUpcomingQuery = gql`
  query campaignsUpcoming {
    campaigns: campaignsUpcoming {
      id
      name
      starts_at
      ends_at
      created_at
      client {
        name
      }
    }
  }
 `

const CampaignsUpcomingWithData = graphql(campaignsUpcomingQuery)(CampaignsUpcoming)

export default CampaignsUpcomingWithData