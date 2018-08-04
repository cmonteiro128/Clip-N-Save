module.exports = {
  friendlyName: "Generate Recommended List",

  description:
    "Generates a new list of recommended user items based on search terms",

  inputs: {
    searchTerms: {
      description: "List of search terms to generate list off of",
      type: "ref",
      required: true
    }
  },

  exits: {
    success: {
      responseType: ""
    },
    notFound: {
      description: "Was not able to generate",
      responseType: "notFound"
    }
  },

  fn: async function(inputs, exits) {
    const listOfItemIDs = [];

    for (const searchTerm of inputs.searchTerms) {
      const searchResults = await sails.helpers.search.searchSales(
        searchTerm.query
      );
      if (searchResults[0] !== undefined) {
        listOfItemIDs.push(searchResults[0]);
      }
      if (searchResults[1] !== undefined) {
        listOfItemIDs.push(searchResults[1]);
      }
      if (searchResults[2] !== undefined) {
        listOfItemIDs.push(searchResults[2]);
      }
    }

    return exits.success(listOfItemIDs);
  }
};
