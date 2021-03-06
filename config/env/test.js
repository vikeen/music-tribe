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
      url: process.env.MUSIC_TRIBE_TEST_DATABASE_URL,
      pool: false,
      ssl: false
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
