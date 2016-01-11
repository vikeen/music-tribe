import Sails from 'sails'
let sails;

before(function (done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(15000);

  Sails.lift({}, function (err, server) {
    sails = server;
    if (err) {
      return done(err);
    }

    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function (done) {
  // here you can clear fixtures, etc.
  Sails.lower(done);
});
