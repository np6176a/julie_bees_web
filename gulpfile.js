/**
 * Created by niya on 15-01-30.
 */
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');


gulp.task('minify-css', function() {
    return gulp.src('./static/css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('./dist/'))
});