import React from 'react'
import moment from 'moment'
import styles from './campaign-row.css'

const CampaignRow = ({campaign}) => {
  return <div className={styles.listItem}>
    <div style={{display:'inline-block', width: '100%'}}>
      <div style={{float: 'left', marginBottom: '14px'}}>
        <h4>{campaign.name}</h4>
        <h5>{campaign.client.name}</h5>
      </div>
      <div style={{float: 'right'}}>
        <h5>Created {moment(campaign["created_at"]).fromNow()}</h5>
      </div>
    </div>
    <div style={{display: 'block'}}>
      {moment(campaign["starts_at"]).format('Y-MM-DD')} - {moment(campaign["ends_at"]).format('Y-MM-DD')}
    </div>
  </div>
}

export default CampaignRow