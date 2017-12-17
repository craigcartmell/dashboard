import React from 'react'
import moment from 'moment'
import styles from './campaign-row.css'

const CampaignRow = ({campaign}) => {
  return <div className={styles.listItem}>
    <div className="flex w-full flex-no-wrap px-4 py-4">
      <div>
        <span className="block text-md font-bold h-auto">{campaign.name}</span>
        <span className="block text-sm">{campaign.client.name}</span>
      </div>
    </div>
    <div className="block flex px-4 py-4 text-sm">
      <div className="flex-1">{moment(campaign["starts_at"]).format('Y-MM-DD')} - {moment(campaign["ends_at"]).format('Y-MM-DD')}</div>
      <div className="flex-2">Created {moment(campaign["created_at"]).fromNow()}</div>
    </div>
  </div>
}

export default CampaignRow