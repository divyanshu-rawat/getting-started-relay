import express from "express";
import { MongoClient } from "mongodb";

import Schema from "./public/Data/schema";
import GraphQLHTTP from "express-graphql";
import config from "./config";

const app = express();

let database;
app.use(express.static("public"));

MongoClient.connect(
  config.mongoUrl,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    database = client.db("rgr");
    app.use(
      "/graphql",
      GraphQLHTTP({
        schema: Schema(database)
        // graphiql: true
      })
    );
    app.listen(3000);
  }
);
