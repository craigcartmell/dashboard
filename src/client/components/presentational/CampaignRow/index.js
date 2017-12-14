import React from 'react'
import moment from 'moment'
import styles from './campaign-row.css'

const CampaignRow = ({campaign}) => {
  return <div className={styles.listItem}>
    <div style={{width: '70%', float: 'left', marginBottom: '14px'}}>
      <h4>{campaign.name}</h4>
      <h5>{campaign.client.name}</h5>
    </div>
    <div style={{float: 'right'}}>
      <h5>{moment(campaign["created_at"]).fromNow()}</h5>
    </div>
  </div>
}

export default CampaignRow