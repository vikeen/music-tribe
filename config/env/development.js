/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in
 *     development environment
 */

export default {
  port: 3000,
  appUrl: 'http://localhost:3000',
  log: {
    level: 'verbose'
  },
  connections: {
    postgresql: {
      adapter: 'sails-postgresql',
      url: process.env.MUSIC_TRIBE_DEVELOPMENT_DATABASE_URL,
      pool: false,
      ssl: false
    }
  },
  models: {
    connection: 'postgresql'
  }
};
