const elasticsearch = require("elasticsearch");
const config = sails.config;

module.exports = {
  friendlyName: "Elastic Search Connection",

  description: "Connection info for ElasticSearch",

  inputs: {},

  fn: async function(inputs, exits) {
    const client = new elasticsearch.Client({
      hosts: [config.elasticURI],
      requestTimeout: 120000
    });
    return exits.success(client);
  }
};
