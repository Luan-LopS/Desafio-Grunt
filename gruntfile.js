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
        watch:{
            styles:{
                files:['./src/styles/**/*.less'],
                tasks:['less'],
                options:{
                    livereload:true
                }
            }
        }

    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')


    grunt.registerTask('default',['less:development','watch'])
    grunt.registerTask('build',['less:production'])

}