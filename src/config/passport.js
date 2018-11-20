const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // stores user object in the session

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // retrieves user object from the session

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

 };
