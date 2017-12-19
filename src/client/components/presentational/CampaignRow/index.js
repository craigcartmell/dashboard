import React from 'react'
import moment from 'moment'

const CampaignRow = ({campaign, index}) =>
  <div style={rowStyle(index)}>
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

const rowStyle = (index = 0) => {
  return index % 2 === 0 ? {'background': 'rgba(37, 37, 37, 0.2)'} : {}
}

export default CampaignRow