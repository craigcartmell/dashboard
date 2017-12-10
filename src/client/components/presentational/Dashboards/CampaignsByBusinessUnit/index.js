import React from 'react'

const CampaignsByBusinessUnit = ({ campaignsByBusinessUnit }) =>
  <div className={"flex md:flex-row flex-wrap"}>>
    {campaignsByBusinessUnit.map((businessUnit) =>
      <div className={"flex-1"}>
        {businessUnit.name}
      </div>
  )}
  </div>

export default CampaignsByBusinessUnit