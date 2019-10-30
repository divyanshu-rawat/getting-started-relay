import express from "express";
import { MongoClient } from "mongodb";
import config from "./config";

const app = express();

app.use(express.static("public"));

app.listen(3000);

console.log(config.mongoUrl)
MongoClient.connect(config.mongoUrl, {useUnifiedTopology: true}, (err, client) => {
    if(err) throw err;
    const database = client.db('rgr');
    database.collection("links").find({}).toArray((err, links) => {
        if(err) throw err;
        client.close();
    })  
});
