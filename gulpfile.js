var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var cssbeautify = require('gulp-cssbeautify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scss', function() {
	gulp.src('css/scss/**/*.scss')
		.pipe(changed('css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(cssbeautify())
		.pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    gulp.src(['js/**/*.js', '!js/**/scripts.js', '!js/**/scripts.min.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
	gulp.watch('css/scss/**/*.scss', ['scss'])
});

gulp.task('default', ['scss', 'js']);
