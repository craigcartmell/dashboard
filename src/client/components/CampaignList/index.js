import React from 'react'
import moment from 'moment'
import styles from './campaign-list.css'

const CampaignList = ({ data: {loading, error, campaignsManualLatest } = {}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul className={styles.list}>{campaignsManualLatest.map((c, k) =>

    <li className={styles.listItem} key={k}>
      <h4>{c.name}</h4>
      <h5>{c.client.name}</h5>
      <span>{moment(c.createdAt).fromNow()}</span>
    </li>)
  }</ul>
}

export default CampaignList