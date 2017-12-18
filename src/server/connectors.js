import objection from 'objection'
import knex from 'knex'
import env from './.env.json'

const Model = objection.Model;

const smartcontent = env.connectors.smartcontent

const db = knex(smartcontent);

Model.knex(db);