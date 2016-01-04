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
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};