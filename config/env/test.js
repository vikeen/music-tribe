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
      database: 'music_tribe_test',
      host: '172.17.8.150',
      user: 'music_tribe_user',
      password: 'password',
      port: 5432,
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
