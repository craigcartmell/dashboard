import React from 'react'
import styles from './campaign-list.css'

const CampaignList = ({ data: {loading, error, campaigns } = {}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul className={styles.list}>{campaigns.map((c, k) => <li className={styles.listItem} key={k}>{c.name}</li>)}</ul>
}

export default CampaignList