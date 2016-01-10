module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'copy:jsDeps',
    'copy:dev',
    //'coffee:dev'
  ]);
};
