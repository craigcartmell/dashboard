import {Model} from 'objection'

class FailedJob extends Model {
  static get tableName() {
    return 'failed_jobs';
  }

  static get jsonAttributes() {
    return ['payload'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'failed_at'],

      properties: {
        id: {type: 'string'},
        payload: {type: 'json', properties: {
          displayName: {type: 'string'}
        }},
        exception: {type: 'string'},
        failed_at: {type: 'dateTime'},
      }
    }
  }
}

export default FailedJob