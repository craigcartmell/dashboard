import {Model} from 'objection'
import Campaign from "./Campaign"

class BusinessUnit extends Model {
  static get tableName() {
    return 'business_units';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name'],

      properties: {
        id: {type: 'string'},
        name: {type: 'string'},
      }
    }
  }

  static get relationMappings() {
    return {
      campaigns: {
        relation: Model.ManyToManyRelation,
        modelClass: Campaign,
        join: {
          from: 'business_units.id',
          through: {
            from: 'business_unit_campaign.business_unit_id',
            to: 'business_unit_campaign.campaign_id'
          },
          to: 'campaigns.id'
        }
      },
    }
  }
}

export default BusinessUnit