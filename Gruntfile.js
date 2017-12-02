module.exports = function(grunt){
    // 프로젝트 구성
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
            files: ['js/values.js', 'js/prompt.js']
        }
    });
    // 그런트 플러그인 로드
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 작업 등록
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};