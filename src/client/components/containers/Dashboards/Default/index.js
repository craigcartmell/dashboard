import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import CampaignList from '../../../presentational/CampaignList'
import GridItem from '../../../presentational/GridItem'
import FailedJobList from "../../../presentational/FailedJobList"
import Title from "../../../presentational/Dashboards/Title"
import Grid from "../../../presentational/Grid"

const campaignsQuery = gql`
   query campaignsManualQuery {
     campaigns: campaignsManual {
       id
       name
       created_at
       client {
        name
       }
     }
   }
 `;

const CampaignListWithData = graphql(campaignsQuery)(CampaignList);

const failedJobsQuery = gql`
   query failedJobsQuery {
     failedJobs(limit: 3) {
       id
       payload
       exception
       failed_at
     }
   }
 `;

const FailedJobsWithData = graphql(failedJobsQuery)(FailedJobList);

const Aux = props => props.children

const Default = () =>
  <Aux>
    <Title title="Dashboard"/>
    <Grid>
      <GridItem className="flex-1" title="Latest Manual Campaigns">
        <CampaignListWithData/>
      </GridItem>

      <GridItem className="flex-2" title="Latest Failed Jobs">
        <FailedJobsWithData/>
      </GridItem>
    </Grid>
  </Aux>

export default Default