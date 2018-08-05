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
      uid: "QGcRuNiGbuQSrCH7AwPbjvLKqPW2",
      type: "weekly"
    });
    return res.ok(response);
  },
  sendCart: async (req, res) => {
    let response = await sails.helpers.sendEmails({
      uid: "QGcRuNiGbuQSrCH7AwPbjvLKqPW2",
      type: "cart"
    });
    return res.ok(response);
  }
};
