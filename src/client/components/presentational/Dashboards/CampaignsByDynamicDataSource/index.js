import React from 'react'
import _groupBy from 'lodash/groupBy'

import Grid from '../../Grid'
import GridItem from '../../GridItem'
import CampaignRow from "../../CampaignRow"
import Title from "../Title"

const Aux = props => props.children

const CampaignsByDynamicDataSource = ({ data: {error, loading, campaigns} }) =>
{
  if (!campaigns) {
    return null
  }

  const campaignsByDynamicDataSource = _groupBy(
    campaigns, campaign => campaign.dynamicDataSources.map(d => d.type)
  )

  return <Aux>
    <Title title="Live Campaigns by Data Provider"/>
    <Grid>
      {Object.keys(campaignsByDynamicDataSource).map(dynamicDataSource =>
        <GridItem title={dynamicDataSource} key={dynamicDataSource}>
          <Aux>
            {campaignsByDynamicDataSource[dynamicDataSource].map((campaign, index) =>
              <CampaignRow campaign={campaign} index={index} key={index}/>
            )}
          </Aux>
        </GridItem>
      )}
    </Grid>
  </Aux>
}

export default CampaignsByDynamicDataSource