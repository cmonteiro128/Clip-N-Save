const fetch = require('node-fetch');
const parser = require('xml2json');

module.exports = {
  friendlyName: 'Load Data Shaws / Star Market',

  description: 'Loads flyer information from Shaws / Star Market into MongoDB',

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: ''
    },
    notFound: {
      description:
        'Was not able to load data from Shaws / Star Market to MongoDB',
      responseType: 'notFound'
    }
  },

  fn: async function(inputs, exits) {
    let res = await fetch(
      //Shaws and Stop and Shop actually have different links ... we'll hardcode for now until location features are implemented
      'https://circulars-prod.cpnscdn.com/padolib/StarMarket/18_24_STR_WC_M/store/2576/productDB.xml'
    );
    let xml = await res.text();
    let jsonString = await parser.toJson(xml);
    let json = await JSON.parse(jsonString);

    json['catalog-productdb']['catalog-product'].forEach(async element => {
      let itemInfo = {
        productName: element.title,
        storeName: 'Shaws',
        salePrice: element.sale,
        startDate: element.start,
        endDate: element.end,
        image:
          'https://circulars-prod.cpnscdn.com/padolib/StarMarket/18_24_STR_WC_M/products/' +
          element.photo
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
