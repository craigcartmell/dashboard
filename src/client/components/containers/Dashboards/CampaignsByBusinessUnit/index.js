import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsByBusinessUnit from '../../../../components/presentational/Dashboards/CampaignsByBusinessUnit'

const campaignsByBusinessUnitQuery = gql`
  query campaignsByBusinessUnitQuery($offset: Int, $limit: Int) {
    campaignsByBusinessUnit(offset: $offset, limit: $limit) {
      id
      name
      campaigns(limit:5) {
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
  }
 `

const CampaignsByBusinessUnitWithData = graphql(campaignsByBusinessUnitQuery, {
  options: ownProps => {
    let {match: {params: {pageNumber}}} = ownProps

    pageNumber = parseInt(pageNumber)

    const limit = 8
    const offset = (pageNumber - 1) * limit + 1

    return {
      variables: {
        offset,
        limit,
    }}
  }

})(CampaignsByBusinessUnit)

export default CampaignsByBusinessUnitWithData