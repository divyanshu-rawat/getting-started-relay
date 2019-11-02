import fs from "fs";
import express from "express";
import { MongoClient } from "mongodb";
import config from "./config";

// Graphql imports!
import { graphql } from "graphql";
import Schema from "./public/Data/schema";
import GraphQLHTTP from "express-graphql";
import { introspectionQuery } from "graphql/utilities";

const app = express();

let database;
app.use(express.static("public"));

(async () => {
  const client = await MongoClient.connect(config.mongoUrl, {
    useUnifiedTopology: true
  });
  const db = client.db("rgr");
  const schema = Schema(db);
  app.use(
    "/graphql",
    GraphQLHTTP({
      schema
      //graphiql: true
    })
  );
  app.listen(3000, () => console.log("listening on port 3000"));

  // Generate Schema.json

  const json = await graphql(schema, introspectionQuery);
  fs.writeFile(
    "./public/Data/schema.json",
    JSON.stringify(json, null, 2),
    err => {
      if (err) throw err;
      console.log("Schema Generated!");
    }
  );
})();
