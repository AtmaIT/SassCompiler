const fs = require('fs')
const settings = JSON.parse(fs.readFileSync('./settings.json'))

module.exports = grunt => {
    const cwdParam = grunt.option('cwd');
    if(cwdParam) settings.cwd = cwdParam;
    const Helper = new (require('./helper.js'))(settings)
    
    grunt.initConfig({

        notify: {
            compile: {
                options: {
                    title: 'Tarefa concluida',
                    message: 'Sass compilado com sucesso',
                }
            }
        },

        chmod: {
            options: { mode: '666' },
            init: { src: Helper.prepareCwdToChmod() }
        },

        watch: Helper.prepareWatch(),
        sass: Helper.prepareSass(),
        cssmin: Helper.prepareCssMin()

    })

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-chmod');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
    if(!Helper.settings.minify) grunt.registerTask('compile', ['chmod:init', 'sass', 'notify:compile']);
    else grunt.registerTask('compile', ['chmod:init', 'sass', 'cssmin', 'notify:compile']);
}