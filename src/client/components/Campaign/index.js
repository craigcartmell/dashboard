import React from 'react'

const Campaign = ( { campaign = {} } ) => {
  return <div>{campaign.id} name: {campaign.name}</div>
};

export default Campaign