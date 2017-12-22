import React from 'react'

import Grid from '../../Grid'
import GridItem from '../../GridItem'
import CampaignRow from "../../CampaignRow"
import Title from "../Title"

const Aux = props => props.children

const CampaignsByBusinessUnit = ({ data: {error, loading, campaignsByBusinessUnit} }) =>
  <Aux>
    <Title title="Live Campaigns by Business Unit"/>
    <Grid>
      {campaignsByBusinessUnit && campaignsByBusinessUnit.map((businessUnit, businessUnitIndex) =>
        <GridItem title={businessUnit.name + " (" + businessUnit.campaigns.length + ")"} key={businessUnitIndex}>
          <div>
            {businessUnit.campaigns.map((campaign, campaignIndex) =>
              <CampaignRow campaign={campaign} key={campaign.id} index={campaignIndex}/>
            )}
          </div>
        </GridItem>
      )}
    </Grid>
  </Aux>

export default CampaignsByBusinessUnit