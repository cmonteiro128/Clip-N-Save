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

    json[0].field_flyer_item.forEach(async element => {
      let itemInfo = {
        productName: element.node.title[0].value,
        storeName: 'Market Basket',
        salePrice: element.node.field_deal_pricing[0].value,
        startDate: json[0].field_start_date[0].value,
        endDate: json[0].field_end_date[0].value,
        image: element.field_product_image_thumb
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

    sails.log(json[0].field_end_date[0].value);

    return exits.success(json);
  }
};
