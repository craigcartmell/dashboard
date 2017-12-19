import {Model} from 'objection'
import Campaign from "./Campaign"

class DynamicDataSource extends Model {
  static get tableName() {
    return 'dynamic_data_sources';
  }

  static get namedFilters() {
    return {
      campaignWide: (builder) => builder.whereNotNull('campaign_id'),
    }
  }

  // Optional JSON schema. This is not the database schema!
  // Nothing is generated based on this. This is only used
  // for validation. Whenever a model instance is created
  // it is checked against this schema.
  // http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name', 'type', 'created_at'],

      properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        type: {type: 'string'},
        created_at: {type: 'dateTime'},
      }
    }
  }

  static get relationMappings() {
    return {
      campaign: {
        relation: Model.BelongsToOneRelation,
        modelClass: Campaign,
        join: {
          from: 'campaigns.id',
          to: 'dynamic_data_sources.campaign_id'
        }
      },
    }
  }
}

export default DynamicDataSource