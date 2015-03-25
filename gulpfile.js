/**
 * Created by niya on 15-01-30.
 */
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('minify-js', function() {
    gulp.src('./dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./template/js/'))
});

gulp.task('minify-css', function() {
    return gulp.src('./dev/Styles/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('./template/Styles/'))
});
