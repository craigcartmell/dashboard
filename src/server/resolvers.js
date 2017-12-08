import { Campaign } from './connectors'

const resolvers = {
  Query: {
    campaigns(_) {
      return Campaign.findAll()
    },
    campaign(_, args) {
      return Campaign.find({ where: args })
    },
  },
  Campaign: {
    client(campaign) {
      return campaign.getClient()
    },
  },
  Client: {
    campaign(client) {
      return client.getCampaign()
    },
  },
};

export default resolvers