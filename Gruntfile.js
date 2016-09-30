
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            /* thumbnail */
            width: 100,
            name: '100',
            quality: 20
          },{
            /* large */
            width: 750,
            name: '750',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'src/views/images/',
          dest: 'views/images/'
        }]
      }
    },

    /* Clear out the distribution resource directories if existing */
    clean: {
      dev: {
        src: ['dist/views/images', 'dist/img', 'dist/css', 'dist/js']
      },
    },

    /* Generate the distribution resource directories if missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist/views/images', 'dist/img', 'dist/css', 'dist/js']
        },
      },
    },

    /* Minify images */
    imagemin: {
      target1: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/img'
        }]
      },
      target2: {
        files: [{
          expand: true,
          cwd: 'views/images',
          src: ['pizzeria-*.jpg', '*.png'],
          dest: 'dist/views/images'
        }]
      }
    },

    /* Minify CSS style files */
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    /* Minify JS files */
    uglify: {
      target: {
        files: {
          'dist/js/perfmatters.min.js': 'src/js/perfmatters.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin', 'cssmin', 'uglify']);

};
