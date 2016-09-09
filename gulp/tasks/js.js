const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const config = require('../config');
const envify = require('envify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const uglifyify = require('uglifyify');
const watchify = require('watchify');

const dist = config.paths.dist;
const names = config.names;
const src = config.paths.src;
const styleguide = config.paths.styleguide;

function bundle() {
    const transforms = [envify, babelify];
    const opts = {
        entries: src.app.entry,
        transform: [...transforms, uglifyify]
    };
    const bundler = watchify(browserify(Object.assign({}, watchify.args, opts)));
    function rebundle() {
        return bundler.bundle()
            .on('error', e => gutil.log(gutil.colors.red(e.name) + e.message.substr(e.message.indexOf(': ') + 1)))
            .pipe(source(names.js.src))
            .pipe(buffer())
            // .pipe(sourcemaps.init({ loadMaps: true }))
            // .pipe(sourcemaps.write('./'))
            .pipe(uglify())
            .pipe(rename(names.js.min))
            .pipe(gulp.dest(dist.js))
            .pipe(gulp.dest(styleguide.js))
            .pipe(browserSync.stream());
    };
    bundler
        .on('update', rebundle)
        .on('log', gutil.log);
    return rebundle();
};
gulp.task('js', ['lint'], bundle);
