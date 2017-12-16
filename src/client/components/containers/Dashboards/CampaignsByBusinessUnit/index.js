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
    const limit = 4
    let offset = 0
    let {match: {params: {pageNumber}}} = ownProps

    pageNumber = parseInt(pageNumber)
    pageNumber = isNaN(pageNumber) ? 1 : pageNumber

    if (pageNumber > 1) {
      offset = pageNumber ? (pageNumber - 1) * limit : 0
    }

    return {
      variables: {
        offset,
        limit,
    }}
  }

})(CampaignsByBusinessUnit)

export default CampaignsByBusinessUnitWithData