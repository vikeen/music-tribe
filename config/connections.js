/**
 * Connections API Configuration
 *
 * Connections are like "saved settings" for your adapters.
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * NOTE: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 */

export default {
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
    },

    /**
     * Memory configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    memory: {
      adapter: 'sails-memory'
    },

    /**
     * Disk configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    disk: {
      adapter: 'sails-disk'
    }
  }
}
