import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import styles from './default.css'

import CampaignList from '../../../presentational/CampaignList'
import GridItem from '../../../presentational/GridItem'
import FailedJobList from "../../../presentational/FailedJobList"

const campaignsQuery = gql`
   query campaignsManualQuery {
     campaignsManual {
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

const Default = () =>
  <div>
    <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
      <GridItem className="flex-1" title="Latest Manual Campaigns">
        <CampaignListWithData/>
      </GridItem>

      <GridItem className="flex-1" title="Latest Failed Jobs">
        <FailedJobsWithData/>
      </GridItem>
    </div>
</div>

export default Default