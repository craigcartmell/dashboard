import React from 'react'

const Campaign = ( { campaign } ) => {
  return <div>id: {campaign ? campaign.id : 'unknown'} name: {campaign ? campaign.name: 'unknown'} baa</div>
};

export default Campaign