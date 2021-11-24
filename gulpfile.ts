const gulp = require('gulp');
const sass = require('gulp-sass');

const sassFiles = './src/**/*.scss';

const gulpSass = () => {
    return gulp
        .src(sassFiles)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
};

const gulpWatch = () => {
    gulp.watch(sassFiles, gulpSass);
};

exports.watch = gulp.parallel(gulpWatch);
