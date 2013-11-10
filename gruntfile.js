/*!
 * @ Package for Responsive Boilerplate Micro Lib @!!!!!
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
        files: {
            src: [ 'js/*.js' ],
            dest: 'js/',
            expand: true,
            flatten: true,
            ext: '.min.js'
        }
    },
    jshint: {
      options: {
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      },
      all: {
        files: {
          src: ['gruntfile.js', 'js/custom.js', 'src/rb-accordion.js', 'rb-menu.js']
        }
      }
    },
    concat: {
      options: {
      },
      dist: {
        src: [
          'src/rb-menu.js',
          'src/rb-accordion.js'

        ],
        dest: 'js/rb-ui.js'
      }
    },
    less: {
      development: {
        options: {
          paths: ['less'],
          yuicompress: false
        },
        files: {
          'css/responsiveboilerplate.css':'less/responsiveboilerplate.less',
          'css/rb-ui.css':'less/rb-ui.less'

        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      compress: {
        files: {
          'css/responsiveboilerplate.min.css': ['css/responsiveboilerplate.css'],
          'css/rb-ui.min.css':['css/rb-ui.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'js/**/*.js', 'libs/**/*.js', 'css/**/*.css'],
        tasks: ['jshint','concat','uglify'],
        options: {
          debounceDelay: 250
        }
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['less','cssmin'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint','concat','uglify','less','cssmin','watch']);

};

