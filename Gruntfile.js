module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    jade: {
      release: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          // target.html file: source.jade file
          'public/*.html': 'assets/views/*.jade',
        }
        tasks: ['jade'],
      }
    }

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          'public/css/main.css': 'less/main.less',

        }
      }
    },

    watch: {
      styles: {
        files: [
          'less/main.less',
        ],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['jade' ,'less']);
};
