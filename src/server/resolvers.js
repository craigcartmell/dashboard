import Campaign from './models/Campaign'

const resolvers = {
  Query: {
    campaigns(_) {
      return Campaign.query().limit(5).then()
    },
    campaignsManual(_) {
      return Campaign.query().applyFilter('manual').limit(5).orderBy('created_at', 'DESC').then()
    },
    campaign(_, args) {
      return Campaign.query().findById(args.id).then()
    },
  },
  Campaign: {
    client(campaign) {
      return campaign.$relatedQuery('client').then()
    },
    openLayerCampaigns(campaign) {
      return campaign.$relatedQuery('openLayerCampaigns').then()
    }
  },
  Client: {
    campaign(client) {
      return client.$relatedQuery('campaign').then()
    },
  },
};

export default resolvers