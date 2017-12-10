import Campaign from './models/Campaign'
import FailedJob from "./models/FailedJob"

const resolvers = {
  Query: {
    campaigns(_, args) {
      const {limit = 5} = args

      return Campaign.query().limit(limit).then()
    },
    campaignsManual(_, args) {
      const {limit = 5} = args

      return Campaign.query().applyFilter('manual').limit(limit).orderBy('created_at', 'DESC').then()
    },
    campaign(_, args) {
      return Campaign.query().findById(args.id).then()
    },
    failedJobs(_, args) {
      const {limit = 5} = args

      const jobs = FailedJob.query().limit(limit).then(jobs => {
        return jobs.map(j => {
          try {
            j.payload = JSON.stringify(j.payload)
          } catch(e) {
          }

          return j
        })
      })

      return Promise.resolve(jobs)
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
  FailedJob: {

  },
};

export default resolvers