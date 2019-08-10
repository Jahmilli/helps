const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat-stubby', done => {
    gulp
        .src('stubby/*/**/*.yml')
        .pipe(concat('stubby.yml'))
        .pipe(gulp.dest('stubby'));
        done();
});