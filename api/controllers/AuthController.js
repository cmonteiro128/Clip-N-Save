/**
 * AuthController
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
  checkUser: (req, res) => {
    if (req.user) {
      User.findOrCreate(
        { uid: req.user.uid },
        {
          uid: req.user.uid,
          firstName: req.user.displayName,
          email: req.user.email
        }
      ).exec(async (err, user, wasCreated) => {
        if (err) {
          return res.serverError(err);
        }

        if (wasCreated) {
          sails.log("Created a new user: " + user.name);
        } else {
          sails.log("Found existing user: " + user.name);
        }
        return res.json(user);
      });
    }
  }
  /*login: function(req, res) {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.send({
          message: info.message,
          user
        });
      }
      req.logIn(user, err => {
        if (err) {
          res.send(err);
        }
        return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  },
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }*/
};
