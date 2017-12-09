import React from 'react'
import moment from 'moment'
import styles from './campaign-list.css'

const CampaignList = ({data : {campaigns, error, loading }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className={styles.list}>{campaigns && campaigns.map((c, k) =>
    <div className={styles.listItem} key={k}>
      <div style={{width: '70%', float: 'left', marginBottom: '14px'}}>
        <h4>{c.name}</h4>
        <h5>{c.client.name}</h5>
      </div>
      <div style={{float: 'right'}}>
        <h5>{moment(c["created_at"]).fromNow()}</h5>
      </div>
    </div>)
  }</div>
}

export default CampaignList