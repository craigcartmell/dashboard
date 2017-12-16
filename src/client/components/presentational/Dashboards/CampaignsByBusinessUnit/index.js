import React from 'react'

import styles from './campaigns-by-business-unit.css'

import Grid from '../../Grid'
import GridItem from '../../GridItem'
import CampaignRow from "../../CampaignRow"
import Title from "../Title"

const Aux = props => props.children

const CampaignsByBusinessUnit = ({ data: {error, loading, campaignsByBusinessUnit} }) =>
  <Aux>
    <Title title="Live Campaigns by Business Unit"/>
    <Grid>
      {campaignsByBusinessUnit && campaignsByBusinessUnit.map((businessUnit, k) =>
        <GridItem title={businessUnit.name + " (" + businessUnit.campaigns.length + ")"} key={k}>
          <div className={styles.list}>
            {businessUnit.campaigns.map((campaign) =>
              <CampaignRow campaign={campaign} key={campaign.id}/>
            )}
          </div>
        </GridItem>
      )}
    </Grid>
  </Aux>

export default CampaignsByBusinessUnit