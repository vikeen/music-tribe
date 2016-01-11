import { assert } from 'chai';

const newUser = {
  username: 'modelTest',
  password: 'password',
  email: 'modelTest@gmail.com'
};

describe('models:Users', () => {
  it('Should create new user', done => {
    Users
      .create(newUser)
      .then(user => {
        assert.equal(user.username, newUser.username);
        done();
      })
      .catch(done);
  });

  it('Should remove user', done => {
    Users
      .destroy({username: newUser.username})
      .then(users => {
        assert.equal(users[0].username, newUser.username);
        done();
      })
      .catch(done);
  });
});
