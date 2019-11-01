import express from "express";
import { MongoClient } from "mongodb";

import Schema from "./public/Data/schema";
import GraphQLHTTP from "express-graphql";
import config from "./config";

const app = express();

let database;
app.use(express.static("public"));

(async () => {
  const client = await MongoClient.connect(config.mongoUrl, {
    useUnifiedTopology: true
  });
  const db = client.db("rgr");
  app.use(
    "/graphql",
    GraphQLHTTP({
      schema: Schema(db)
      // graphiql: true
    })
  );
  app.listen(3000);
})();
