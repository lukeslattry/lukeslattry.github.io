var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');
 
sass.compiler = require('node-sass');
 
gulp.task('css', function () {
    return gulp.src('./css/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
    gulp.watch('./css/scss/*.scss', gulp.parallel('css'));
});

gulp.task('default', gulp.parallel('css'));