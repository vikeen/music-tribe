/**
 * Production environment settings
 * @description :: This section overrides all other config values ONLY in production environment
 */

export default {
  port: 80,
  log: {
    level: 'info'
  },
  connections: {
    postgresql: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL,
      ssl: true
    }
  },
  models: {
    connection: 'postgresql'
  }
};
