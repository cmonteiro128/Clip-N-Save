const fetch = require('node-fetch');

module.exports = {
  friendlyName: 'Load Data Market Basket',

  description: 'Loads flyer information from Market Basket into MongoDB',

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: ''
    },
    notFound: {
      description: 'Was not able to load data from Market Basket to MongoDB',
      responseType: 'notFound'
    }
  },

  fn: async function(inputs, exits) {
    let res = await fetch('https://www.shopmarketbasket.com/weekly-flyer-rest');
    let json = await res.json();
    return exits.success(json);
  }
};
