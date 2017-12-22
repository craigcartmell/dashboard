import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import Grid from '../../Grid'
import Title from "../Title"
import GridItem from "../../GridItem"

const Aux = props => props.children

const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x  = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy  + radius * Math.sin(-midAngle * RADIAN);
//
//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const CampaignsByBusinessUnit = ({ data: {error, loading, campaignsByBusinessUnit} }) => {
  if (!campaignsByBusinessUnit) {
    return null
  }

  console.log('campaigns', campaignsByBusinessUnit)

  const data = campaignsByBusinessUnit.reduce((carry, businessUnit) => {
    console.log('bu', businessUnit.campaigns.length)
    carry.push({businessUnit, value: businessUnit.campaigns.length})

    return carry
  }, [])

  // const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
  //   {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return <Aux>
    <Title title="Live Campaigns by Business Unit"/>
    <Grid>
          <PieChart width={800} height={400}>
            <Pie
              data={data}
              cx={'20%'}
              cy={'40%'}
              labelLine={false}
              label={(item) =>`${item.businessUnit.id.toUpperCase()}`}
              // label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
            >
              {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
              }
            </Pie>
          </PieChart>
    </Grid>
  </Aux>
}

export default CampaignsByBusinessUnit