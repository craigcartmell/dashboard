import {Model} from 'objection'
import Campaign from "./Campaign"

class Client extends Model {
  static get tableName() {
    return 'clients';
  }

  // Optional JSON schema. This is not the database schema!
  // Nothing is generated based on this. This is only used
  // for validation. Whenever a model instance is created
  // it is checked against this schema.
  // http://json-schema.org/.
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
      campaign: {
        relation: Model.HasManyRelation,
        modelClass: Campaign,
        join: {
          from: 'clients.id',
          to: 'campaigns.client_id',
        }
      }
    }
  }
}

export default Client