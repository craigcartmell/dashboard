import knex from 'knex'
import moment from 'moment'

import Campaign from './models/Campaign'
import FailedJob from "./models/FailedJob"
import BusinessUnit from "./models/BusinessUnit"

const resolvers = {
  Query: {
    campaigns(_, args) {
      const {limit = 5} = args

      return Campaign.query().eager('client').applyFilter('live').limit(limit).then()
    },
    campaignsManual(_, args) {
      const {limit = 5} = args

      return Campaign
        .query()
        .eager('client')
        .where('is_active', true)
        .applyFilter('manual')
        .applyFilter('live')
        .limit(limit)
        .orderBy('created_at', 'DESC')
        .then()
    },
    campaignsByBusinessUnit(_, args) {
      const {offset = 5, limit = 5} = args

      return BusinessUnit.query()
        .allowEager('campaigns')
        .eager('campaigns')
        .select('business_units.id', 'business_units.name')
        .select(knex.raw('(' +
          'SELECT COUNT(business_unit_campaign.business_unit_id) from business_unit_campaign' +
          ' WHERE business_unit_campaign.business_unit_id = business_units.id' +
          ' GROUP BY business_unit_campaign.business_unit_id) AS campaigns_count'))
        .offset(offset)
        .limit(limit)
        .orderBy('campaigns_count', 'DESC')
        // Our most important business units
        .orderByRaw('FIELD(business_units.id, "no", "gb", "se", "au") DESC')
        .then()
    },
    campaignsUpcoming(_, args) {
      return Campaign
        .query()
        .where('starts_at', '>', moment().format('Y-MM-DD'))
        .whereRaw('starts_at < DATE_ADD(CURDATE(), INTERVAL 7 DAY)')
        .orderBy('starts_at', 'ASC')
        .then()
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
  BusinessUnit: {
    campaigns(businessUnit, args) {
      const {limit = 5} = args

      return businessUnit.$relatedQuery('campaigns').limit(limit).then()
    },
  },
  FailedJob: {

  },
};

export default resolvers