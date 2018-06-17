module.exports = {
  friendlyName: 'Populate Elastic Search',

  description: 'Loads flyer information from Market Basket into MongoDB',

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: ''
    },
    notFound: {
      description: 'Was not able to populate ElasticSearch',
      responseType: 'notFound'
    }
  },

  fn: async function(inputs, exits) {
    const client = await sails.helpers.elasticSearchConnection();

    // We want to get all data in Mongo and add it to ElasticSearch
    var saleItems = await SaleItem.find();

    let bulk = [];

    saleItems.forEach(element => {
      bulk.push(
        {
          index: { _index: 'saleitems', _type: 'saleItem', _id: element.PANO }
        },
        {
          productName: element.productName,
          salePrice: element.salePrice,
          storeName: element.storeName,
          startDate: element.startDate,
          endDate: element.endDate
        }
      );
    });

    client.bulk(
      {
        index: 'saleitems',
        type: 'saleItem',
        body: bulk
      },
      (err, resp, status) => {
        if (err) {
          sails.log(err);
          return exits.notFound(err);
        } else {
          return exits.success(resp.items);
        }
      }
    );
  }
};
