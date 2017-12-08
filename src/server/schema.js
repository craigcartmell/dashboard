import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Campaign {
  id: String
  name: String
  client: [Client]
}
type Client {
  id: String
  name: String
  campaign: [Campaign]
}
type Query {
  campaign(id: String): Campaign
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });