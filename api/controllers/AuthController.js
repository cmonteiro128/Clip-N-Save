/**
 * AuthController
 *
 * @description :: Handles authentication functions through Passport
 */
const passport = require('passport');

module.exports = {
  login: function(req, res) {
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
  }
};
