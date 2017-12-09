import Campaign from './models/Campaign'

const resolvers = {
  Query: {
    campaigns(_) {
      return Campaign.query().limit(5).then()
    },
    campaign(_, args) {
      return Campaign.query().findById(args.id).then()
    },
    // campaignsManualLatest(_) {
    //   return Campaign
    //     .scope('manual')
    //     .findAll({
    //       limit: 5,
    //       order: [
    //         ['createdAt', 'DESC'],
    //         ['name', 'ASC'],
    //       ],
    //     })
    //}
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