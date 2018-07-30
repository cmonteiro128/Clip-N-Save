/**
 * LoadSalesController
 *
 * @description :: Actions for loading in sale data from store API to DB
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  loadMarketBasket: async (req, res) => {
    const response = await sails.helpers.loadData.loadMarketBasket();
    return res.json(response);
  },
  loadStopShop: async (req, res) => {
    const response = await sails.helpers.loadData.loadStopShop();
    return res.json(response);
  },
  loadShaws: async (req, res) => {
    const response = await sails.helpers.loadData.loadShaws();
    return res.json(response);
  },
  loadWalmart: async (req, res) => {
    const response = await sails.helpers.loadData.loadWalmart();
    return res.json(response);
  },
  loadTarget: async (req, res) => {
    const response = await sails.helpers.loadData.loadTarget();
    return res.json(response);
  },
  populateElastic: async (req, res) => {
    const response = await sails.helpers.loadData.populateElastic();
    return res.json(response);
  }
};
