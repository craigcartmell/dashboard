import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsByDynamicDataSource from '../../../../components/presentational/Dashboards/CampaignsByDynamicDataSource'

const campaignsByDynamicDataSourceQuery = gql`
  query campaignsWithDynamicDataSources {
    campaigns: campaignsWithDynamicDataSources {
      name
      created_at
      starts_at
      client {
        name
      }
      dynamicDataSources {
        id,
        type
      }
    }
  }
 `

const CampaignsByDynamicDataSourceWithData = graphql(campaignsByDynamicDataSourceQuery)(CampaignsByDynamicDataSource)

export default CampaignsByDynamicDataSourceWithData