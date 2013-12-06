/*!
 * @ Package for Responsive Boilerplate Micro Lib @!!!!!
 */

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Copyright, Version number and date.
		banner: '/*!' +
							'* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
							'* Author: <%= pkg.author %> - Licensed under MIT license.\n' +
							'*/\n',
		// Begining of tasks          
		uglify: {
			options: {
				banner: '<%= banner %>'
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
					src: ['gruntfile.js', 'js/custom.js']
				}
			}
		},
		recess: {
			options: {
				compile: true,
				banner: '<%= banner %>'
			},
			base: {
				src: ['less/responsiveboilerplate.less'],
				dest: 'css/<%= pkg.name %>.css'
			},
			min: {
				options: {
					compress: true
				},
				src: ['less/responsiveboilerplate.less'],
				dest: 'css/<%= pkg.name %>.min.css'
			}
		},
		watch: {
			scripts: {
				files: ['Gruntfile.js', 'js/**/*.js', 'libs/**/*.js', 'css/**/*.css'],
				tasks: ['jshint','uglify'],
				options: {
					debounceDelay: 250
				}
			},
			recess: {
				files: 'less/*.less',
				tasks: ['recess']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-recess');

	grunt.registerTask('default', ['jshint','uglify','recess']);
	grunt.registerTask('dev', ['jshint','uglify','recess','watch']);
};