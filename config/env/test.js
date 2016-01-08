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
    memory: {
      adapter: 'sails-memory'
    },
    disk: {
      adapter: 'sails-disk'
    }
  },
  models: {
    connection: 'memory',
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
