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
      database: 'da3nlm8q6uhceu',
      host: 'ec2-54-83-52-71.compute-1.amazonaws.com',
      user: 'sdamdpoahiiipl',
      password: 'pWemlPDE2r0yErDRtvEA918PwC',
      port: 5432,
      pool: false,
      ssl: true
    }
  },
  models: {
    connection: 'postgresql'
  }
};
