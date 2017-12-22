import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import schema from './schema'

import env from './.env.json'

// TODO: Move?
require('./connectors')

const app = express()
const endpointURL = env.app.endpointURL
const graphiqlURL = env.app.graphiqlURL

app.use(endpointURL, [cors(), bodyParser()], graphqlExpress({ schema }))
app.get(graphiqlURL, graphiqlExpress({ endpointURL }))

app.listen(env.app.port)