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

  /* Load Data */
  'POST /api/v1/load-data/load-market-basket': {
    action: 'load-data/load-market-basket'
  },
  'POST /api/v1/load-data/load-stop-shop': {
    action: 'load-data/load-stop-shop'
  },
  'POST /api/v1/load-data/load-target': { action: 'load-data/load-target' },
  'POST /api/v1/load-data/load-shaws': { action: 'load-data/load-shaws' },
  'POST /api/v1/load-data/load-walmart': { action: 'load-data/load-walmart' },
  'POST /api/v1/load-data/populate-elastic': {
    action: 'load-data/populate-elastic'
  },

  /* Search */
  'POST /api/v1/search/search-sales': { action: 'search/search-sales' },

  /* User Test */
  'GET /api/v1/user/user-info': { action: 'Auth/userTest' }

  /* Authentication */
  //'POST /api/v1/user/register': 'UserController.register', // Register & create user
  //'POST /api/v1/user/login': 'AuthController.login', // Login
  //'POST /api/v1/user/logout': 'AuthController.logout' // Logout
};
