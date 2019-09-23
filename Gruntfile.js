module.exports = function(grunt) {

  // load all tasks
  require('load-grunt-tasks')(grunt);

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    prompt: {
      params: {
        options: {
          questions: [
            {
              config: 'name',
              type: 'input',
              message: 'Theme name:',
              default: 'My Theme',
              filter: function(value) {
                let folder_name = value.toLowerCase().replace(/ /g,"-");
                grunt.config.set('folder_name', folder_name);
                return value;
              }
            },
            {
              config: 'url',
              type: 'input',
              message: 'Theme URL:',
              default: 'https://example.com',
            },
            {
              config: 'description',
              type: 'input',
              message: 'Theme description:',
              default: 'My Divi Child Theme',
              filter:  function(value) {
                let package_name = value.toLowerCase().replace(/ /g,"-");
                grunt.config.set('package_name', package_name);
                return value;
              }
            },
            {
              config: 'prefix',
              type: 'input',
              message: 'Code prefix:',
              default: 'my_theme',
            },
            {
              config: 'author_name',
              type: 'input',
              message: 'Author Name:',
              default: 'Author Name',
            },
            {
              config: 'author_email',
              type: 'input',
              message: 'Author email:',
              default: 'email@example.com',
            },
            {
              config: 'author_url',
              type: 'input',
              message: 'Author URL:',
              default: 'https://example.com',
            },
            {
              config: 'repository',
              type: 'list',
              message: 'Git repository:',
              default: 'Github',
              choices: ['Github', 'Bitbucket', 'GitLab']
            },
            {
              config: 'repository_username',
              type: 'input',
              message: function (answers) {
                return answers['repository'] + ' username:';
              },
              validate: function (value) {
                var valid = value != '';
                return !!valid || 'Please provide a repository username.';
              }
            },
            {
              config: 'repository_url_confirm',
              type: 'confirm',
              message: function (answers) {
                let username = answers['repository_username'];
                let package_name = grunt.config('package_name');
                var url = '';
                switch ( answers['repository'] ) {
                  case 'Github':
                    url = `ssh://git@github.com:${username}/${package_name}.git`;
                    break;
                  case 'Bitbucket':
                    url = `ssh://git@bitbucket.org:${username}/${package_name}.git`;
                    break;
                  case 'GitLab':
                    url = `git@gitlab.com:${username}/${package_name}.git`;
                    break;
                }
                grunt.config.set('repository_url', url);
                return `Please confirm the repository URL: ${url}`;
              }
            },
            {
              config: 'repository_url',
              type: 'input',
              message: 'Please provide a repository URL:',
              default: grunt.config('repository_url'),
              when: function(answers) {
                return !answers['repository_url_confirm'];
              }
            },
            {
              config: 'screenshot',
              type: 'input',
              message: 'Screenshot filename located in /screenshots:',
              default: 'screenshot.png',
            }
          ]
        }
      },
    },

    copy: {
      child: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*', '.*'],
            dest: 'build/<%= folder_name %>/',
          }
        ]
      },
      build: {
        files: [
          {
            expand: true,
            cwd: 'build/<%= folder_name %>/',
            src: ['images/**', 'js/**', 'functions.php', 'style.css', 'style.css.map', 'screenshot.png', '.gitignore'],
            dest: 'build/<%= folder_name %>/temp/'
          }
        ]
      },
      screenshot: {
        files: [
          {
            src: ['screenshots/<%= screenshot %>'],
            dest: 'build/<%= folder_name %>/screenshot.png'
          }
        ]
      },
    },

    'string-replace': {
      full: {
        files: [{
          expand: true,
          cwd: 'build/<%= folder_name %>/',
          src: ['functions.php', 'scss/partials/_childtheme.scss', 'README.md', 'package.json'],
          dest: 'build/<%= folder_name %>/'
        }],
        options: {
          replacements: [
            {
              pattern: /\[THEME_NAME\]/g,
              replacement: '<%= name %>'
            },
            {
              pattern: /\[THEME_URL\]/g,
              replacement: '<%= url %>'
            },
            {
              pattern: /\[THEME_DESCRIPTION\]/g,
              replacement: '<%= description %>'
            },
            {
              pattern: /\[CODE_PREFIX\]/g,
              replacement: '<%= prefix %>'
            },
            {
              pattern: /\[PACKAGE_NAME\]/g,
              replacement: '<%= package_name %>'
            },
            {
              pattern: /\[AUTHOR_NAME\]/g,
              replacement: '<%= author_name %>'
            },
            {
              pattern: /\[AUTHOR_EMAIL\]/g,
              replacement: '<%= author_email %>'
            },
            {
              pattern: /\[AUTHOR_URL\]/g,
              replacement: '<%= author_url %>'
            },
            {
              pattern: /\[REPOSITORY_URL\]/g,
              replacement: '<%= repository_url %>'
            },
          ]
        }
      },
    },

    sass: {
      build: {
        files: {
          'build/<%= folder_name %>/style.css': 'build/<%= folder_name %>/scss/style.scss'
        }
      }
    },

    compress: {
      release: {
        options: {
          archive: 'release/<%= folder_name %>.zip'
        },
        files: [
          {expand: true, cwd: 'build/<%= folder_name %>/temp/', src: ['**/*'], dest: '<%= folder_name %>/'}
        ]
      },
    },

    clean: {
      build: {
        src: "build/<%= folder_name %>/temp/"
      }
    }

  });

  // task build
  grunt.registerTask('build', [
    'prompt:params',
    'copy:child',
    'copy:screenshot',
    'string-replace',
    'sass',
    'copy:build',
    'compress:release',
    'clean:build'
  ]);

  grunt.registerTask('test', [
    'prompt:theme_name'
  ]);

};
