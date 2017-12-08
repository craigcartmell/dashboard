import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import styles from './app.css'

import CampaignList from '../CampaignList';

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
      <div className={styles.grid}>
        <div className="flex mb-4">
          <div className="w-full bg-grey h-12"/>
        </div>
        <div className="flex mb-4">
          <div className="w-full bg-grey h-12"/>
        </div>
        <div className="flex mb-4">
          <div className="w-full bg-grey h-12"/>
        </div>
        {/*<CampaignListWithData/>*/}
      </div>
    </div>
  }
}