# Opulent

> Intelligent Web Templating Engine for Creative Web Developers

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install opulent --save-dev
```

Besides grunt, this plugin also requires that you have Ruby >= 2.1.0 and the Opulent gem installed.

```shell
brew install ruby

gem install opulent
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('opulent');
```

### Overview
In your project's Gruntfile, add a section named `opulent` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  opulent: {
    options: {
      layout: 'path/to/layout.op',
      context: 'path/to/context.op'
    },
    files: [{
      expand: true,     // Enable dynamic expansion.
      cwd: 'src',      // Src matches are relative to this path.
      src: ['**/*.op'], // Actual pattern(s) to match.
      dest: 'dest/',   // Destination path prefix.
      ext: '.html',   // Dest filepaths will have this extension.
      extDot: 'last'   // Extensions in filenames begin after the first dot
    }]
  }
})
```

### Options

#### options.layout
Type: `String`
Default value: false

A path to a layout file, in which the source files will be yielded.

#### options.context
Type: `String`
Default value: false

A path to a JSON or YAML file to be used as variables source.

### Usage Examples

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Pixevil. Licensed under the MIT license.
