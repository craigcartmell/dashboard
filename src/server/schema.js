import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Campaign {
  id: String!
  name: String
  starts_at: String
  ends_at: String
  created_at: String
  client: Client
  openLayerCampaigns: [OpenLayerCampaign]
  dynamicDataSources: [DynamicDataSource]
}
type Client {
  id: String!
  name: String
  campaign: Campaign
}
type BusinessUnit {
  id: String!
  name: String
  campaigns(offset: Int, limit: Int): [Campaign]
}
type OpenLayerCampaign {
  id: String!
  name: String
  campaign: Campaign
}
type FailedJob {
  id: String!
  payload: String
  exception: String
  failed_at: String
}
type DynamicDataSource {
  id: String!
  name: String
  type: String
  created_at: String
}
type Query {
  campaigns(limit: Int): [Campaign]
  campaignsManual(limit: Int): [Campaign]
  campaignsByBusinessUnit(offset: Int, limit: Int): [BusinessUnit]
  campaignsUpcoming: [Campaign]
  campaign(id: String!): Campaign
  failedJobs(limit: Int): [FailedJob]
  campaignsWithDynamicDataSources(limit: Int, type: String): [Campaign]
}
`

export default makeExecutableSchema({ typeDefs, resolvers })