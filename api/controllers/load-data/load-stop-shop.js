const fetch = require('node-fetch');

module.exports = {
  friendlyName: 'Load Data Stop & Shop',

  description: 'Loads flyer information from Stop & Shop into MongoDB',

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: ''
    },
    notFound: {
      description: 'Was not able to load data from Stop & Shop to MongoDB',
      responseType: 'notFound'
    }
  },

  fn: async function(inputs, exits) {
    let res = await fetch(
      'https://circular.stopandshop.com/flyer_data/1788422?locale=en-US',
      {
        credentials: 'include',
        headers: {},
        referrer:
          'https://circular.stopandshop.com/flyers/stopandshop?type=2&use_requested_domain=true',
        referrerPolicy: 'no-referrer-when-downgrade',
        body: null,
        method: 'GET',
        mode: 'cors'
      }
    );
    let json = await res.json();

    json.items.forEach(async element => {
      let itemInfo = {
        productName: element.name,
        storeName: 'Stop Shop',
        salePrice: element.current_price,
        startDate: element.valid_from,
        endDate: element.valid_to,
        image: element.large_image_url
      };
      await SaleItem.findOrCreate(itemInfo, itemInfo).exec(
        async (err, item, wasCreated) => {
          if (err) {
            return res.serverError(err);
          }

          if (wasCreated) {
            sails.log('Added a new sale item: ' + item.productName);
          } else {
            sails.log('Found existing sale item: ' + item.productName);
          }
        }
      );
    });
    return exits.success(json);
  }
};
