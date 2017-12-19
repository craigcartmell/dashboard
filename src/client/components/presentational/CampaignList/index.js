import React from 'react'
import CampaignRow from "../CampaignRow"

const CampaignList = ({data : {campaigns, error, loading }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <div>{campaigns && campaigns.map((campaign, index) =>
    <CampaignRow campaign={campaign} index={index} key={campaign.id}/>
  )}</div>
}

export default CampaignList