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
