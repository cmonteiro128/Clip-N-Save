const elasticsearch = require('elasticsearch');
const config = sails.config;

module.exports = {
  friendlyName: 'Elastic Search Connection',

  description: 'Connection info for ElasticSearch',

  inputs: {},

  fn: async function(inputs, exits) {
    sails.log(config.elasticURI);
    const client = new elasticsearch.Client({
      hosts: [config.elasticURI]
    });
    return exits.success(client);
  }
};
