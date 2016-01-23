const gulp = require('gulp');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const babel = require('gulp-babel');

gulp.task('minify', () => {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('compile', () => {
    return gulp.src('es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', () => {
    gulp.watch('es6/**/*.js', ['compile']);
});