const { task } = require("grunt")

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                options:{
                    paths:['src/styles']
                },
                files:{
                    'dev/styles/main.css':['src/styles/main.less', 'src/styles/maps.less']
                }
            },
            production:{
                options:{
                    compress:true,
                    paths:['src/styles']
                },
                files:{
                    'dist/styles/main.css':['src/styles/main.less', 'src/styles/maps.less']
                }
            }
        },
        uglify:{
            development: {
                options: {
                    mangle: true,
                    compress: true, 
                    beautify: false 
                },
                files: {
                    'dev/scripts/main.min.js': ['src/scripts/main.js']
                }
            },
            production: {
                options: {
                    mangle: true,
                    compress: true, 
                    beautify: false 
                },
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js']
                }
            }
        },
        watch:{
            styles:{
                files:['./src/styles/**/*.less'],
                tasks:['less'],
                options:{
                    livereload:true
                }
            },
            scripts:{
                files:['./src/scripts/**/*.js'],
                tasks:['uglify'],
                options:{
                    livereload:true
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'dist/images'
                }]
            }
        },

    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-imagemin')


    grunt.registerTask('default',['less:development','uglify:development','imagemin','watch'])
    grunt.registerTask('build',['less:production','uglify:production'])
}