import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import styles from './app.css'

import CampaignList from '../CampaignList'
import GridItem from '../GridItem'

const campaignsManualLatestQuery = gql`
   query campaignsManualLatestQuery {
     campaignsManualLatest {
       id
       name
       createdAt
       client {
        name
       }
     }
   }
 `;

const CampaignListWithData = graphql(campaignsManualLatestQuery)(CampaignList);

export default class extends React.Component {
  render () {
    return <div className={styles.component}>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-3" title="Latest Manual Campaigns">
          <CampaignListWithData/>
        </GridItem>

        <GridItem className="flex-1" title="Going Live">

        </GridItem>

        <GridItem className="flex-1" title="Coming Soon">

        </GridItem>
      </div>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-3" title="Latest Manual Campaigns">
          <CampaignListWithData/>
        </GridItem>

        <GridItem className="flex-1" title="Going Live">

        </GridItem>

        <GridItem className="flex-1" title="Latest Manual Campaigns">

        </GridItem>
      </div>
    </div>
  }
}