module.exports = {
  attributes: {
    productName: { type: "string", required: true },
    storeName: { type: "string", required: true },
    location: { type: "string" },
    salePrice: { type: "string", required: true },
    startDate: { type: "string", required: true },
    endDate: { type: "string", required: true },
    image: { type: "string" },

    owners: {
      collection: "User",
      via: "saleItems"
    },

    ownersRec: {
      collection: "User",
      via: "saleItems"
    }
  }
};
