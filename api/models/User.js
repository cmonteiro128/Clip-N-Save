/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: {
      type: 'string',
      required: true
    },
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    searchTerms: {
      collection: 'searchterm',
      via: 'owner'
    }
  },
  //Passport Stuff
  customToJSON: function() {
    return _.omit(this, ['password']);
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          return cb(err);
        }
        user.password = hash;
        return cb();
      });
      if (err) {
        return cb(err);
      }
    });
  }
};
