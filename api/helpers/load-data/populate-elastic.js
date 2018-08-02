module.exports = {
  friendlyName: "Populate Elastic Search",

  description: "Loads flyer information from Market Basket into MongoDB",

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: ""
    },
    notFound: {
      description: "Was not able to populate ElasticSearch",
      responseType: "notFound"
    }
  },

  fn: async function(inputs, exits) {
    const client = await sails.helpers.elasticSearchConnection();

    // Clear the index first
    await client.deleteByQuery({
      index: "saleitems",
      body: {
        query: {
          match_all: {}
        }
      }
    });

    // We want to get all data in Mongo and add it to ElasticSearch
    const saleItems = await SaleItem.find();

    let bulk = [];

    // Fill an array of objects from our sale items in MongoDB
    saleItems.forEach(element => {
      bulk.push(
        {
          index: { _index: "saleitems", _type: "saleItem", _id: element.PANO }
        },
        {
          productName: element.productName,
          salePrice: element.salePrice,
          storeName: element.storeName,
          startDate: element.startDate,
          endDate: element.endDate,
          image: element.image,
          mongoID: element.id
        }
      );
    });

    // Load the array of objects (saleItems) into Elasticsearch using a bulk call
    await client.bulk(
      {
        index: "saleitems",
        type: "saleItem",
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
