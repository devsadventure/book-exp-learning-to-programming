module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            release: {
                src: ['js/values.js', 'js/prompt.js'],
                dest: 'release/main.js'
            }
        },
        copy: {
            release: {
                src: 'manifest.json',
                dest: 'release/manifest.json'
            }
        },
        jshint: {
            file: ['js/values.js', 'js/prompt.js']
        } 
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};