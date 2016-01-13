/**
 * Facebook Configuration
 *
 * These settings are for any configuration related to Facebook
 *
 */

export default {
  facebook: {
    oauth: {
      url: 'https://www.facebook.com/dialog/oauth',
      appId: process.env.MUSIC_TRIBE_FACEBOOK_APP_ID,
      appSecret: process.env.MUSIC_TRIBE_FACEBOOK_APP_SECRET,
      redirectPath: '/auth/social/facebook'
    }
  }
}
