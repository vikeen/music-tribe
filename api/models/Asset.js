/**
 * Asset.js
 *
 * @description :: TODO: You might write a short summary of how this model
 *     works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

export default {
  schema: true,
  tableName: 'assets',

  attributes: {
    userId: {
      type: 'integer',
      required: true
    },
    uuid: {
      type: 'string',
      required: true
    },
    fileName: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    size: {
      type: 'integer',
      required: true
    },
    url: {
      type: 'string',
      required: true
    }
  }
}
