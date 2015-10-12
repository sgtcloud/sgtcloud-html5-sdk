var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('compile', function() {
	gulp.src(['./src/jsonrpc.js','./src/sgtcloud-html5-sdk.2.0.0.js']).
	pipe(concat('sgtcloud-html5-sdk.2.0.0.js')).
	pipe(gulp.dest('./dist/')).
	pipe(gulp.dest('./src/test/')).
	pipe(uglify()).
	pipe(rename({extname: '.min.js'})).
	pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['compile']);

