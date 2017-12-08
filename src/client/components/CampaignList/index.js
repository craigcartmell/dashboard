import React from 'react'
import Campaign from '../Campaign'

const CampaignList = ({ data: {loading, error, campaigns } = {}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return campaigns.map((c, k) => <Campaign campaign={c} key={k}/>)
}

export default CampaignList