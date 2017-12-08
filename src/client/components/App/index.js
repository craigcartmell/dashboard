import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Campaign from '../Campaign';

const campaignQuery = gql`
   query campaignQuery {
     campaign {
       id
       name
     }
   }
 `;

const CampaignWithData = graphql(campaignQuery)(Campaign);

export default class extends React.Component {
  render () {
    return <CampaignWithData/>
  }
}