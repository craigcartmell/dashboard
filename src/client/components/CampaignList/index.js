import React from 'react'
import Campaign from '../Campaign'

const CampaignList = ({ data: {loading, error, campaigns } = {}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  console.log('campaigns', campaigns)

  return campaigns.map((c, k) => {
    console.log('key', k, 'camp', c)
    return <Campaign campaign={c} key={k}/>
  })
};

export default CampaignList