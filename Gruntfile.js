const sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'scripts/**/*.js', 'test/**/*.js'],
      options: {
        'esversion': 6
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      files: [
        'Gruntfile.js',
        'scripts/**/*.js',
        'styles/**/*.scss',
        'index.html'
      ],
      tasks: ['build']
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'build/main.css': 'styles/main.scss'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      js: {
        src: 'scripts/js/*.js',
        dest: 'build/scripts/main.js'
      },
      css: {
        src: 'build/**/*.css',
        dest: 'build/main.css'
      }
    },
    copy: {
      files: {
        cwd: './',
        src: './*.html', // copy all files and subfolders **with ending .html**
        dest: 'build/',
        expand: true
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build/',
          livereload: true,
          open: true
        }
      }
    },
    clean: {
      build: {
        src: ['build/']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', [
    'clean:build',
    'jshint',
    'sass',
    'concat',
    'jshint',
    'copy',
    'connect',
    'watch',
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'jshint',
    'sass',
    'concat',
    'jshint',
    'copy'
  ]);
};