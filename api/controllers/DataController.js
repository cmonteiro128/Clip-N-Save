/**
 * DataControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getSearchTerms: async (req, res) => {
    if (req.user) {
      const userWithSearchTerms = await User.find({
        uid: req.user.uid
      }).populate("searchTerms");
      return res.json(userWithSearchTerms[0].searchTerms);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  },
  addSearchTerm: async (req, res) => {
    if (req.user) {
      //Create our new search term and get its ID
      let searchTermID;

      const searchRecord = await SearchTerm.findOrCreate(
        { query: req.body.query },
        {
          query: req.body.query
        }
      );

      searchTermID = searchRecord.id;

      const userToAddSearchTerm = await User.find({
        uid: req.user.uid
      });

      await User.addToCollection(
        userToAddSearchTerm[0].id,
        "searchTerms"
      ).members([searchTermID]);

      const updatedUser = await User.find({
        uid: req.user.uid
      }).populate("searchTerms");

      return res.json(updatedUser[0].searchTerms);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  }
};
