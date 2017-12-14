import React from 'react'
import moment from 'moment'
import styles from './campaign-list.css'
import CampaignRow from "../CampaignRow"

const CampaignList = ({data : {campaigns, error, loading }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className={styles.list}>{campaigns && campaigns.map((campaign) =>
    <CampaignRow campaign={campaign} key={campaign.id}/>
  )}</div>
}

export default CampaignList