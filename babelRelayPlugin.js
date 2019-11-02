const getBabelRelayPlugin = require("babel-relay-plugin");
const schemaData = require("./public/Data/schema.json").data;
module.exports = getBabelRelayPlugin(schemaData);
