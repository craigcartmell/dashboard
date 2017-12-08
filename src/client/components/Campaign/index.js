import React from 'react'

const Campaign = ({ data: {loading, error, campaign } = {}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <span>id: {campaign ? campaign.id : 'unknown'} name: {campaign ? campaign.name: 'unknown'}</span>
};

export default Campaign