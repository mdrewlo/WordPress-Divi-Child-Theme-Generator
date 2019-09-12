module.exports = function(grunt) {

  // load all tasks
  require('load-grunt-tasks')(grunt);

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
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
