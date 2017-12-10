import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
// import GraphQLJSON from 'graphql-type-json';

const typeDefs = `
type Campaign {
  id: String!
  name: String
  created_at: String
  client: Client
  openLayerCampaigns: [OpenLayerCampaign]
}
type Client {
  id: String!
  name: String
  campaign: Campaign
}
type BusinessUnit {
  id: String!
  name: String
  campaigns: [Campaign]
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
type Query {
  campaigns(limit: Int): [Campaign]
  campaignsManual(limit: Int): [Campaign]
  campaignsByBusinessUnit(limit: Int): [BusinessUnit]
  campaign(id: String!): Campaign
  failedJobs(limit: Int): [FailedJob]
}
`

export default makeExecutableSchema({ typeDefs, resolvers })