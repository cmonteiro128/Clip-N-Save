const fetch = require("node-fetch");
const parser = require("xml-js");

module.exports = {
  friendlyName: "Load Data Shaws / Star Market",

  description: "Loads flyer information from Shaws / Star Market into MongoDB",

  inputs: {
    // NONE
  },

  exits: {
    success: {
      responseType: "",
    },
    notFound: {
      description:
        "Was not able to load data from Shaws / Star Market to MongoDB",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    // Shaws uses week number in its flyer data url's, so we want to compute that first
    let getWeekNumber = (d) => {
      // Copy date so don't modify original
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
      // Get first day of year
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      // Calculate full weeks to nearest Thursday
      const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
      // Return array of year and week number
      return weekNo;
    };

    // Get the actual week number
    const weekNumber = getWeekNumber(new Date());

    let res = await fetch(
      //Shaws and Stop and Shop actually have different links ... we'll hardcode for now until location features are implemented
      "https://circulars-prod.cpnscdn.com/padolib/StarMarket/18_" +
        weekNumber +
        "_STR_WC_M/store/2576/productDB.xml"
    );
    let xml = await res.text();
    let jsonString = await xml2json.toJson(xml);
    let json = await JSON.parse(jsonString);

    json["catalog-productdb"]["catalog-product"].forEach(async (element) => {
      let itemInfo = {
        productName: element.title,
        storeName: "Shaws",
        salePrice: element.sale,
        startDate: element.start,
        endDate: element.end,
        image:
          "https://circulars-prod.cpnscdn.com/padolib/StarMarket/18_" +
          weekNumber +
          "_STR_WC_M/products/" +
          element.photo,
      };
      await SaleItem.findOrCreate(itemInfo, itemInfo).exec(
        async (err, item, wasCreated) => {
          if (err) {
            return sails.log(err);
          }

          if (wasCreated) {
            sails.log("Added a new sale item: " + item.productName);
          } else {
            sails.log("Found existing sale item: " + item.productName);
          }
        }
      );
    });
    return exits.success(json);
  },
};
