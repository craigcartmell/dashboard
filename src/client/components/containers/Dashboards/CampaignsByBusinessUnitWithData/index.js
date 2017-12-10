import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignsByBusinessUnit from '../../../../components/presentational/Dashboards/CampaignsByBusinessUnit'

const campaignsByBusinessUnitQuery = gql`
   query campaignsByBusinessUnitQuery {
     campaignsByBusinessUnit {
       id
       name
       campaigns
     }
   }
 `;

const CampaignsByBusinessUnitWithData = graphql(campaignsByBusinessUnitQuery)(CampaignsByBusinessUnit);

export default CampaignsByBusinessUnitWithData