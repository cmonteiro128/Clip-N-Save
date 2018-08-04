/**
 * SearchSalesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  searchSales: async (req, res) => {
    const response = await sails.helpers.search.searchSales(
      req.body.productName
    );
    return res.json(response);
  }
};
