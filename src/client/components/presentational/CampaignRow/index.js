import React from 'react'
import moment from 'moment'
import GridItemRow from "../GridItemRow"

const CampaignRow = ({campaign, index}) =>
  <GridItemRow index={index}>
    <div className="block w-full leading-normal">
      <span className="block text-md font-bold h-auto">{campaign.name}</span>
      <span className="block text-sm">{campaign.client.name}</span>
    </div>
    <div className="block w-full flex py-8 text-sm">
      <span className="flex-1">{moment(campaign["starts_at"]).format('Y-MM-DD')} - {moment(campaign["ends_at"]).format('Y-MM-DD')}</span>
      <span className="flex-2">Created {moment(campaign["created_at"]).fromNow()}</span>
    </div>
  </GridItemRow>

export default CampaignRow