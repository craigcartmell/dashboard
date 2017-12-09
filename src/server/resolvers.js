import {Campaign, Client, OpenLayerCampaign} from './connectors'

const resolvers = {
  Query: {
    campaigns(_) {
      return Campaign.findAll({
        limit: 5,
      })
    },
    campaign(_, args) {
      return Campaign.find({ where: args })
    },
    campaignsManualLatest(_) {
      return Campaign
        // .scope('manual')
        .findAll({
          limit: 5,
        })
        // .order('createdAt', 'desc')
    }
  },
  Campaign: {
    client(campaign) {
      return campaign.getClient()
    },
    openLayerCampaigns(campaign) {
      return campaign.getOpenLayerCampaigns()
    }
  },
  Client: {
    campaign(client) {
      return client.getCampaign()
    },
  },
};

export default resolvers