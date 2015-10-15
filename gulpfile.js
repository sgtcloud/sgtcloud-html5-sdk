var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc');
var eslint = require('gulp-eslint');
var exec = require('child_process').exec;
var yargs = require('yargs').argv;

var options = {
	lintPaths : [
		'./src/*.js'
	]
};

gulp.task('compile', function() {
	gulp.src(['./src/jsonrpc.js','./src/sgtcloud-html5-sdk.2.0.0.js']).
	pipe(concat('sgtcloud-html5-sdk.2.0.0.js')).
	pipe(gulp.dest('./dist/')).
	pipe(gulp.dest('./src/test/')).
	pipe(uglify()).
	pipe(rename({extname: '.min.js'})).
	pipe(gulp.dest('./dist/'));
});

gulp.task('development', function() {
	gulp.watch('./src/*.js', function(event) {
		if('changed' === event.type){
			gulp.start('compile');
		}
	});
});

gulp.task('generateApi', function() {
	gulp.src('./src/sgtcloud-html5-sdk.2.0.0.js').
	pipe(jsdoc('./api/'));
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
	exec('start.bat');
});

gulp.task('default', ['lint'], function() {
	if(yargs.p) {
		gulp.start('npm:publish');
	}
	if(yargs.g) {
		gulp.start('generateApi');
	}
	if(yargs.tutorials) {
		gulp.start('tutorials');
	}
	if(yargs.w) {
		gulp.start('development');
	} else {
		gulp.start('compile');
	}
});

