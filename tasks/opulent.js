/*
 * opulent
 * http://opulent.io
 *
 * Copyright (c) 2015 Alex Grozav
 * Licensed under the MIT license.
 */

'use strict';
var shell = require('shelljs');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('opulent', 'Intelligent Web Templating Engine for Creative Web Developers', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      layout: false,
      context: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      var bin = ['opulent'], src;

      bin.push(file.src);
      bin.push(file.dest);

      if(options.layout){
        bin.push('-l');
        bin.push(options.layout);
      }

      if(options.context){
        bin.push('-c');
        bin.push(options.context);
      }

      shell.exec(bin.join(' '));
    });
  });

};
