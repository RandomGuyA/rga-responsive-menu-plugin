module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["css"]
				},
			files: {
				"css/rga-responsive-menu-plugin.css": "less/*.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		},
		uglify: {
			build: {
				files: {
					'dist/rga-responsive-menu-plugin.min.js': ['js/rga-responsive-menu-plugin.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.registerTask('default', ['less', 'watch', 'uglify']);
	
};