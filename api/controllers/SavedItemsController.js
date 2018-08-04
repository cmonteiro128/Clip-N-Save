/**
 * SavedItemsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getSavedItems: async (req, res) => {
    if (req.user) {
      const userWithSavedItems = await User.find({
        uid: req.user.uid
      }).populate("saleItems");
      return res.json(userWithSavedItems[0].saleItems);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  },
  addSavedItem: async (req, res) => {
    if (req.user) {
      const savedItemID = req.body.id;

      const userToAddSavedItem = await User.find({
        uid: req.user.uid
      });

      await User.addToCollection(userToAddSavedItem[0].id, "saleItems").members(
        [savedItemID]
      );

      const updatedUser = await User.find({
        uid: req.user.uid
      }).populate("saleItems");

      return res.json(updatedUser[0].saleItems);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  },
  removeSavedItem: async (req, res) => {
    if (req.user) {
      //Create our new search term and get its ID
      const savedItemID = req.body.id;

      const userToRemoveSavedItem = await User.find({
        uid: req.user.uid
      });

      await User.removeFromCollection(
        userToRemoveSavedItem[0].id,
        "saleItems"
      ).members([savedItemID]);

      const updatedUser = await User.find({
        uid: req.user.uid
      }).populate("saleItems");

      return res.json(updatedUser[0].saleItems);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  }
};
