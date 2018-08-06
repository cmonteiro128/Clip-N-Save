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
      const userWithRecItems = await User.find({
        uid: req.user.uid
      }).populate("recommendedItems");

      return res.json({
        searchTerms: userWithSearchTerms[0].searchTerms,
        recItems: userWithRecItems[0].recommendedItems
      });
    } else {
      return res
        .status(401)
        .send("You are not permitted to perform this action.");
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

      // Let's repopulate our recommended items
      const newRecItems = await sails.helpers.generateRecommended(
        updatedUser[0].searchTerms
      );

      let arrayOfRecIds;
      if (newRecItems !== null) {
        arrayOfRecIds = newRecItems.map(element => element._source.mongoID);
      }

      // Save those items
      await User.replaceCollection(
        userToAddSearchTerm[0].id,
        "recommendedItems"
      ).members(arrayOfRecIds);

      const userWithRecItems = await User.find({
        uid: req.user.uid
      }).populate("recommendedItems");

      return res.json({
        searchTerms: updatedUser[0].searchTerms,
        recItems: userWithRecItems[0].recommendedItems
      });
    } else {
      return res
        .status(401)
        .send("You are not permitted to perform this action.");
    }
  },
  removeSearchTerm: async (req, res) => {
    if (req.user) {
      //Create our new search term and get its ID
      const searchTermID = req.body.id;

      const userToRemoveSearchTerm = await User.find({
        uid: req.user.uid
      });

      await User.removeFromCollection(
        userToRemoveSearchTerm[0].id,
        "searchTerms"
      ).members([searchTermID]);

      const updatedUser = await User.find({
        uid: req.user.uid
      }).populate("searchTerms");

      // Let's repopulate our recommended items
      const newRecItems = await sails.helpers.generateRecommended(
        updatedUser[0].searchTerms
      );

      let arrayOfRecIds;
      if (newRecItems !== null) {
        arrayOfRecIds = newRecItems.map(element => element._source.mongoID);
      }

      // Save those items
      await User.replaceCollection(
        userToRemoveSearchTerm[0].id,
        "recommendedItems"
      ).members(arrayOfRecIds);

      const userWithRecItems = await User.find({
        uid: req.user.uid
      }).populate("recommendedItems");

      return res.json({
        searchTerms: updatedUser[0].searchTerms,
        recItems: userWithRecItems[0].recommendedItems
      });
    } else {
      return res
        .status(401)
        .send("You are not permitted to perform this action.");
    }
  }
};
