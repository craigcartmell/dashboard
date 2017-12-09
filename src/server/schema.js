import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

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
type OpenLayerCampaign {
  id: String!
  name: String
  campaign: Campaign
}
type Query {
  campaigns: [Campaign]
  campaignsManual: [Campaign]
  campaign(id: String!): Campaign
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });