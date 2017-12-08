import { Campaign } from './connectors';

const resolvers = {
  Query: {
    campaign(_, args) {
      return Campaign.find({ where: args });
    },
  },
  Campaign: {
    client(campaign) {
      return campaign.getClient();
    },
  },
  Client: {
    campaign(client) {
      return client.getCampaign();
    },
  },
};

export default resolvers;