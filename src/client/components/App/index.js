import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import styles from './app.css'

import CampaignList from '../CampaignList'
import GridItem from '../GridItem'

const campaignListQuery = gql`
   query campaignListQuery {
     campaigns {
       id
       name
     }
   }
 `;

const CampaignListWithData = graphql(campaignListQuery)(CampaignList);

export default class extends React.Component {
  render () {
    return <div className={styles.component}>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-3 h-13" title="Latest Manual Campaigns">
          <CampaignListWithData/>
        </GridItem>

        <GridItem className="flex-1 h-12" title="Going Live">

        </GridItem>

        <GridItem className="flex-1 h-12" title="Coming Soon">

        </GridItem>
      </div>
      <div className={styles.grid + " flex md:flex-row-reverse flex-wrap"}>
        <GridItem className="flex-3 h-12" title="Latest Manual Campaigns">
          <CampaignListWithData/>
        </GridItem>

        <GridItem className="flex-1 h-12" title="Going Live">

        </GridItem>

        <GridItem className="flex-1 h-12" title="Latest Manual Campaigns">

        </GridItem>
      </div>
    </div>
  }
}