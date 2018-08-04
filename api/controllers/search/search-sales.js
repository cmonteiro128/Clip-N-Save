module.exports = {
  friendlyName: "Search sale items",

  description: "Searches items through query of product name",

  inputs: {
    productName: {
      description: "The name of the product to search for",
      type: "string",
      required: true
    }
  },

  exits: {
    success: {
      responseType: ""
    },
    notFound: {
      description: "Was not able to perform a search",
      responseType: "notFound"
    }
  },

  fn: async function(inputs, exits) {
    const client = await sails.helpers.elasticSearchConnection();

    client.search(
      {
        index: "saleitems",
        type: "saleItem",
        size: "1000",
        body: {
          query: {
            bool: {
              must: {
                match: {
                  productName: inputs.productName
                }
              },
              filter: {
                bool: {
                  must: [
                    {
                      range: {
                        startDate: {
                          lte: "now+1d/d"
                        }
                      }
                    },
                    {
                      range: {
                        endDate: {
                          gte: "now+1d/d"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      },
      (error, response, status) => {
        if (error) {
          sails.log("search error: " + error);
          return exits.notFound();
        } else {
          sails.log("--- Response ---");
          sails.log(response);
          sails.log("--- Hits ---");
          response.hits.hits.forEach(hit => {
            sails.log(hit);
          });
          return exits.success(response.hits.hits);
        }
      }
    );
  }
};
