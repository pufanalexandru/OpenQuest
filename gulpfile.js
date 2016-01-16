var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var babel = require('gulp-babel');
var es = require('event-stream');

gulp.task('watch', function () {
    gulp.watch('es6/**/*.js', ['compile']);
});

gulp.task('compile', function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', babel({ presets: ['es2015'] })))
        .pipe(gulp.dest('app'));
});

gulp.task('export', function () {
    return es.merge(
        gulp.src('app/main.min.js').pipe(uglify()).pipe(gulp.dest('app/dist')),
        gulp.src('app/style.css').pipe(cssnano()).pipe(gulp.dest('app/dist')));
});