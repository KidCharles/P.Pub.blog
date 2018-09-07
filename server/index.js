require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"), 
  ctrl = require('./ctrl');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

// Enpoints
app.get('/api/posts', ctrl.getPosts )

app.listen(SERVER_PORT, () => console.log(`server is Glistening on port ${SERVER_PORT}`))
