/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  /* Heartbeat */
  "GET /api/v1/heartbeat": { action: "Heartbeat/heartbeat" },

  /* Load Data */
  "POST /api/v1/load-data/load-market-basket": {
    action: "LoadSales/loadMarketBasket",
  },
  "POST /api/v1/load-data/load-stop-shop": {
    action: "LoadSales/loadStopShop",
  },
  "POST /api/v1/load-data/load-shaws": { action: "LoadSales/loadShaws" },
  "POST /api/v1/load-data/load-walmart": { action: "LoadSales/loadWalmart" },
  "POST /api/v1/load-data/load-target": { action: "LoadSales/loadTarget" },
  "POST /api/v1/load-data/populate-elastic": {
    action: "LoadSales/populateElastic",
  },

  /* Search */
  "POST /api/v1/search/search-sales": { action: "SearchSales/searchSales" },

  /* Authentication */
  "POST /api/v1/user/check-user": { action: "Auth/checkUser" },

  /* User Info (Firebase auth) */
  "GET /api/v1/user/user-info": { action: "Auth/userTest" },

  /* Data Actions */
  "GET /api/v1/user/saved-searches": { action: "Data/getSearchTerms" }, // Get User Saved Searches
  "POST /api/v1/user/saved-searches": { action: "Data/addSearchTerm" }, // Add User Saved Search Item
  "DELETE /api/v1/user/saved-searches": { action: "Data/removeSearchTerm" }, // Remove User Saved Search Item

  "GET /api/v1/user/saved-items": { action: "SavedItems/getSavedItems" }, // Get User Saved Items
  "POST /api/v1/user/saved-items": { action: "SavedItems/addSavedItem" }, // Add User Saved Item
  "DELETE /api/v1/user/saved-items": { action: "SavedItems/removeSavedItem" }, // Remove User Saved Item

  "POST /api/v1/email/test-email": { action: "EmailTest/sendTestEmail" }, // Add User Saved Item
  "POST /api/v1/email/send-cart-email": { action: "EmailTest/sendCart" }, // Add User Saved Item
};
