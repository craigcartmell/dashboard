import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import styles from './app.css'

import CampaignList from '../CampaignList'
import GridItem from '../GridItem'

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

export default class extends React.Component {
  render () {
    return <div className={styles.component}>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-1" title="Latest Manual Campaigns">
          <CampaignListWithData/>
        </GridItem>

        <GridItem className="flex-2" title="Latest Failed Jobs">
          <CampaignListWithData/>
        </GridItem>
      </div>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-1" title="Latest Manual Campaigns">

        </GridItem>

        <GridItem className="flex-3" title="UK Campaigns">
          <CampaignListWithData/>
        </GridItem>
      </div>
    </div>
  }
}