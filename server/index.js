require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  bodyParser = require("body-parser"),
  ctrl = require("./ctrl");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

// Enpoints
app.get("/api/posts", ctrl.getPosts);
app.get("/api/posts/:id", ctrl.getPostsByID);
app.post("/api/publish", ctrl.addPost);
app.put("/api/posts/:id", ctrl.updatePost);
app.delete("/api/posts/:id", ctrl.deletePost);

app.listen(SERVER_PORT, () =>
  console.log(`server is Glistening on port ${SERVER_PORT}`)
);
