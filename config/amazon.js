/**
 * Amazon Configuration
 *
 * These settings are for any configuration related to amazon
 *
 */

export default {
  aws: {
    s3: {
      accessKeyId: process.env.MUSIC_TRIBE_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.MUSIC_TRIBE_AWS_SECRET_ACCESS_KEY,
      region: process.env.MUSIC_TRIBE_AWS_REGION,
      apiVersion: process.env.MUSIC_TRIBE_API_VERSION
    }
  }
}
