/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the
 * sails assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www
 * directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function (grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    jsDeps: {
      files: [{
        '.tmp/public/js/dependencies/jquery.js': './node_modules/jquery/dist/jquery.js',
        '.tmp/public/js/dependencies/bootstrap.js': './node_modules/bootstrap/dist/js/bootstrap.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
