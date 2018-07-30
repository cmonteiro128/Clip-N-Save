/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const scheduler = require("node-schedule");

module.exports.bootstrap = async function(done) {
  const autoLoadData = async () => {
    await sails.helpers.loadData.loadMarketBasket();
    await sails.helpers.loadData.loadStopShop();
    await sails.helpers.loadData.loadShaws();
    await sails.helpers.loadData.populateElastic();
    await sails.helpers.loadData.populateElastic(); // Twice, it fails sometimes
  };

  const minuteJob = scheduler.scheduleJob("0 22 * * *", function() {
    autoLoadData();
  });

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
