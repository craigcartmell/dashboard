import {Model} from 'objection'
import Client from "./Client"
import OpenLayerCampaign from "./OpenLayerCampaign"

class Campaign extends Model {
  static get tableName() {
    return 'campaigns';
  }

  static get namedFilters() {
    return {
      manual: (builder) => builder.whereNotExists(function() {
        this
          .select('*')
          .from('open_layer_campaigns')
          .whereRaw('campaigns.id = open_layer_campaigns.campaign_id');
    })}
  }

  // Optional JSON schema. This is not the database schema!
  // Nothing is generated based on this. This is only used
  // for validation. Whenever a model instance is created
  // it is checked against this schema.
  // http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'name', 'created_at'],

      properties: {
        id: {type: 'string'},
        name: {type: 'string'},
        created_at: {type: 'dateTime'},
      }
    }
  }

  static get relationMappings() {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'campaigns.client_id',
          to: 'clients.id'
        }
      },
      openLayerCampaigns: {
        relation: Model.HasManyRelation,
        modelClass: OpenLayerCampaign,
        join: {
          from: 'campaigns.id',
          to: 'open_layer_campaigns.campaign_id'
        }
      }
    }
  }
}

export default Campaign