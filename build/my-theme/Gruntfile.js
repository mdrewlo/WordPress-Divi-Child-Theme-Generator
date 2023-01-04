module.exports = function(grunt) {

  // load all tasks
  require('load-grunt-tasks')(grunt);

  const sass = require('node-sass');

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        files: {
          'style.css': 'scss/style.scss'
        }
      },
      watch: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          ext: '.css'
        }]
      }
    },

    watch: {
			css: {
				files: 'scss/**/*.scss',
				check: true,
				tasks: ['sass:watch']
			}
    }

  });

  // theme task
  grunt.registerTask('theme', [
    'watch'
  ]);

  // build task
  grunt.registerTask('build', [
    'sass'
  ]);

};
