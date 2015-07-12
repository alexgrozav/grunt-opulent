/*
 * opulent
 * http://opulent.io
 *
 * Copyright (c) 2015 Alex Grozav
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    opulent: {
      default_options: {
        options: {
        },
        files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: '',      // Src matches are relative to this path.
          src: ['**/*.op'], // Actual pattern(s) to match.
          dest: 'tmp/',   // Destination path prefix.
          ext: '.html',   // Dest filepaths will have this extension.
          extDot: 'last'   // Extensions in filenames begin after the first dot
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'opulent', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['opulent']);

};
