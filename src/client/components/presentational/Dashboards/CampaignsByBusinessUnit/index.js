import React from 'react'
import styles from './campaigns-by-business-unit.css'

import GridItem from '../../GridItem'

const CampaignsByBusinessUnit = ({ data: {error, loading, campaignsByBusinessUnit} }) =>
  <div className={styles.grid + " flex md:flex-row flex-wrap"}>
    {campaignsByBusinessUnit && campaignsByBusinessUnit.map((businessUnit, k) =>
      <GridItem title={businessUnit.name + " (" + businessUnit.campaigns.length + ")"} key={k}>
        <div className={styles.list}>
          {businessUnit.campaigns.slice(0,5).map((campaign, ck) =>
            <div className={styles.listItem}>
              {campaign.name}
            </div>)
          }
        </div>
      </GridItem>
  )}
  </div>

export default CampaignsByBusinessUnit