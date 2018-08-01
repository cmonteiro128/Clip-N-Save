/**
 * SavedItemsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getSavedItems: async (req, res) => {
    if (req.user) {
      const userWithSaleItems = await User.find({
        uid: req.user.uid
      }).populate("saleItems");
      return res.json(userWithSaleItems[0].savedItems);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  },
  addSavedItem: async (req, res) => {
    if (req.user) {
      //Create our new sale iterm and get its ID
      let saleItemID = req.body.id;

      const userToAddSaleItem = await User.find({
        uid: req.user.uid
      });

      await User.addToCollection(userToAddSaleItem[0].id, "saleItems").members([
        saleItemID
      ]);

      const updatedUser = await User.find({
        uid: req.user.uid
      }).populate("saleItems");

      return res.json(updatedUser[0].saleItems);
    } else {
      return res.send("You are not permitted to perform this action.", 401);
    }
  }
};
