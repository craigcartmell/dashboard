import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema';

const PORT = 3000;
const app = express();

// var whitelist = [
//   'http://0.0.0.0:3000',
// ];
// var corsOptions = {
//   origin: function(origin, callback){
//     var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(null, originIsWhitelisted);
//   },
//   credentials: true
// };
//
// app.use(cors(corsOptions));


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   // Set custom headers for CORS
//   res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
//
//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }
//
//   return next();
// })

// bodyParser is needed just for POST.
// app.use('/graphql', cors(), graphqlExpress({ schema, }));

// app.use('/graphql', () => console.log('bla'));

// app.options("/graphql", function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
//
// app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphql', [cors(), bodyParser()], graphqlExpress({ schema }));
// app.use('/graphql', function (req, res, next) {
//   cors()
//   next()
// }, function (req, res, next) {
//   graphqlExpress({ schema })
//   next()
// })

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);