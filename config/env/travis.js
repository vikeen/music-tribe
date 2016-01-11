/**
 * Test environment settings
 * @description :: This section overrides all other config values ONLY in test
 *     environment
 */

export default {
  log: {
    level: 'silent'
  },
  connections: {
    postgresql: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL
    }
  },
  models: {
    connection: 'postgresql',
    migrate: 'drop'
  },
  policies: {
    '*': true
  },
  hooks: {
    csrf: false,
    grunt: false,
    i18n: false,
    pubsub: false,
    session: false,
    sockets: false,
    views: false
  }
};
