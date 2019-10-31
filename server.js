import express from "express";
import { MongoClient } from "mongodb";

import schema from "./public/Data/schema";
import GraphQLHTTP from "express-graphql";
import config from "./config";

const app = express();

let database;
app.use(express.static("public"));

app.use(
  "/graphql",
  GraphQLHTTP({
    schema: schema,
    graphiql: true
  })
);

MongoClient.connect(
  config.mongoUrl,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    database = client.db("rgr");
    app.listen(3000);
  }
);

app.get("/data/links", (req, res) => {
  database
    .collection("links")
    .find({})
    .toArray((err, links) => {
      if (err) throw err;
      res.json(links);
    });
});
