/**
 * Email Test
 *
 * @description :: Handles authentication functions through Passport
 */

module.exports = {
  userTest: (req, res) => {
    const out = {};
    if (req.user) {
      out.user = req.user;
    }
    return res.ok(out);
  },
  sendTestEmail: async (req, res) => {
    let response = await sails.helpers.sendEmails({
      uid: "7e4nolrY2yPu89Xvao27cEeBNNn2",
      type: "weekly"
    });
    return res.ok(response);
  },
  sendCart: async (req, res) => {
    if (req.user) {
      let response = await sails.helpers.sendEmails({
        uid: req.user.uid,
        type: "cart"
      });
      return res.ok(response);
    }
    res.status(401).send("You are not permitted to perform this action.");
  }
};
