/**
 * DataControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getSearchTerms: (req, res) => {
    if (req.user) {
      out.user = req.user;
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  }
};
