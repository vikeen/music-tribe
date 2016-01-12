/**
 * User
 * @description :: Model for storing users
 */

export default {
  schema: true,
  tableName: 'users',

  attributes: {
    username: {
      type: 'string',
      defaultsTo: ''
    },

    password: {
      type: 'string'
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    firstName: {
      type: 'string',
      defaultsTo: ''
    },

    lastName: {
      type: 'string',
      defaultsTo: ''
    },

    photo: {
      type: 'string',
      defaultsTo: '',
      url: true
    },

    socialProfiles: {
      type: 'object',
      defaultsTo: {}
    },

    toJSON() {
      let obj = this.toObject();

      delete obj.password;
      delete obj.socialProfiles;

      return obj;
    }
  },

  beforeUpdate(values, next) {
    if (values.hasOwnProperty('password') === false) {
      return next();
    }

    if (/^\$2[aby]\$[0-9]{2}\$.{53}$/.test(values.password)) {
      return next();
    }

    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  },

  beforeCreate(values, next) {
    if (values.hasOwnProperty('password') === false) {
      return next();
    }

    return HashService.bcrypt.hash(values.password)
      .then(hash => {
        values.password = hash;
        next();
      })
      .catch(next);
  }
};
