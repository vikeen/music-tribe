//import {assert} from 'chai';
//import User from '../../../api/models/User';
//
//describe('UserModel', () => {
//  describe('#beforeCreate()', () => {
//    it('should if error if no password', done => {
//      User.beforeCreate({}, function (err, user) {
//        assert.equal(err, true);
//        assert.equal(user, undefined);
//        done();
//      });
//    });
//
//    it('should hash the user\'s password', done => {
//      User.beforeCreate({
//        password: 'password'
//      }, function (err, user) {
//        assert.notEqual(user.password, 'password');
//        done();
//      });
//    });
//  });
//
//  describe('#beforeUpdate()', () => {
//    it('should if error if no password', done => {
//      User.beforeUpdate({}, function (err, user) {
//        assert.equal(err, true);
//        assert.equal(user, undefined);
//        done();
//      });
//    });
//
//    it('should error if password is invalid', done => {
//      User.beforeUpdate({
//        password: '$2a$10$y1xsoZWtZuK/0vNJo/wfm.xhzG7BO4vZUIQkds96J5nxjd0bBIhKi'
//      }, function (err, user) {
//        assert.equal(err, true);
//        assert.equal(user, undefined);
//        done();
//      });
//    });
//
//    it('should update the user\'s password', done => {
//      User.beforeUpdate({
//        password: 'password'
//      }, function (err, user) {
//        assert.notEqual(user.password, 'password');
//        done();
//      });
//    });
//  });
//
//  describe('#toJSON()', () => {
//    it("should stuff", done => {
//      function model() {
//        this.toObject = () => {
//          return {
//            email: 'test@test.com',
//            socialProfiles: {},
//            password: 'password'
//          };
//        }
//      }
//
//      let user = User.attributes.toJSON.bind(new model())();
//
//      assert.deepEqual(user, {
//        email: 'test@test.com'
//      });
//
//      done();
//    });
//  });
//});
