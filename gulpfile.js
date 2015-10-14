var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsdoc = require('gulp-jsdoc');
var eslint = require('gulp-eslint');

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
	gulp.start('generateApi');
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

gulp.task('lint', function() {
	gulp.src(options.lintPaths)
	.pipe(eslint())
	.pipe(eslint.formatEach())
	.pipe(eslint.failOnError());
});

gulp.task('default', ['lint']);

