import React from 'react'
import moment from 'moment'
import _groupBy from 'lodash/groupBy'

import Grid from '../../Grid'
import GridItem from '../../GridItem'
import CampaignRow from "../../CampaignRow"
import Title from "../Title"

const Aux = props => props.children

const CampaignsUpcoming = ({ data: {error, loading, campaigns} }) =>
{
  if (!campaigns) {
    return null
  }

  const campaignsByStartDate = _groupBy(campaigns, campaign => moment(campaign["starts_at"]).fromNow())

  return <Aux>
    <Title title="Upcoming Campaigns"/>
    <Grid>
      {Object.keys(campaignsByStartDate).map(startDate =>
        <GridItem title={startDate} key={startDate}>
          <div>
            {campaignsByStartDate[startDate].map((campaign, index) =>
              <CampaignRow campaign={campaign} index={index} key={campaign.id}/>
            )}
          </div>
        </GridItem>
      )}
    </Grid>
  </Aux>
}

export default CampaignsUpcoming