/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in
 *     development environment
 */

export default {
  port: 3000,
  log: {
    level: 'verbose'
  },
  models: {
    connection: 'postgresql'
  },
  connections: {
    postgresql: {
      adapter: 'sails-postgresql',
      database: 'music_tribe',
      host: '172.17.8.150',
      user: 'music_tribe_user',
      password: 'password',
      port: 5432,
      pool: false,
      ssl: false
    }
  }
};
