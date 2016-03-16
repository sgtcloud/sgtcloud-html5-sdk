var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc');
var eslint = require('gulp-eslint');
var exec = require('child_process').exec;
var yargs = require('yargs').argv;
var mocha = require('gulp-mocha');
var mochawesome = require('mochawesome');

var options = {
	//要编译的文件名集合
    compileFileNames: ['./src/jsonrpc.js', './src/sgtcloud-html5-sdk.js'],
    //编译后的文件名
    compiledFileName:'sgtcloud-html5-sdk.2.1.4.js',
    lintPaths: [
        './src/*.js'
    ]
};

gulp.task('compile', function() {
    gulp.src(options.compileFileNames).
    pipe(concat(options.compiledFileName)).
    pipe(gulp.dest('./dist/')).
    pipe(uglify()).
    pipe(rename({
        extname: '.min.js'
    })).
    pipe(gulp.dest('./dist/'));
});

gulp.task('development', function() {
    gulp.watch('./src/*.js', function(event) {
        if ('changed' === event.type) {
            gulp.start('compile');
        }
    });
});

gulp.task('generateApi', function() {
    gulp.src('./src/sgtcloud-html5-sdk.js').
    pipe(jsdoc('./api/'));
});
gulp.task('watch',function(){
	gulp.watch('./src/sgtcloud-html5-sdk.js',['generateApi']);
});
gulp.task('npm:publish', function() {
    exec('npm publish', function() {

    });
});

gulp.task('lint', function() {
    gulp.src(options.lintPaths)
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failOnError());
});

gulp.task('tutorials', function() {
    exec('cd ./tutorials/ && start.bat');
});

gulp.task('run:test', function() {
    gulp.src('./src/test/test.js')
        .pipe(mocha({
            reporter: 'mochawesome',
            timeout: '20000'
        }));
});

gulp.task('default', ['lint'], function() {
	//发布到npm仓库
    if (yargs.p) {
        gulp.start('npm:publish');
    }
    //生成jsdoc
    if (yargs.g) {
        gulp.start('generateApi');
    }
    //启动排行榜教程服务器
    if (yargs.tutorials) {
        gulp.start('tutorials');
    }
    //监听
    if (yargs.w) {
        gulp.start('development');
    } else if (yargs.t) {	//测试
        gulp.start('run:test');
    } else {				//编译
        gulp.start('compile');
    }
});
