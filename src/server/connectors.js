import objection from 'objection'
import knex from 'knex'

const Model = objection.Model;

const db = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'homestead',
    password : 'secret',
    database : 'smartcontent-admin',
    port: 33060,
  }
});

Model.knex(db);