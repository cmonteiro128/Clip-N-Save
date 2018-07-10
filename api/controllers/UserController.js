/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  register: function(req, res, next) {
    const params = req.allParams();

    User.find({
      email: params.email
    }).exec(async (err, users) => {
      if (err) {
        return res.negotiate(err);
      }
      if (users.length) {
        res.status(400);
        return res.json('User already exists!');
      } else {
        const createdUser = await User.create(params).fetch();
        res.status(201);
        return res.json(createdUser);
      }
    });
  }
};
