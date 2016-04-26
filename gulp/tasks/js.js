import gulp from 'gulp';
import { argv } from 'yargs';
import rename from 'gulp-rename';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import uglifyify from 'uglifyify';
import envify from 'envify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import config from '../config';

const { src, dist, styleguide } = config.paths;
const names = config.names;
const isDev = argv.dev || false;

function bundle() {
    const transforms = [envify, babelify];
    const opts = {
        entries: src.app.entry,
        debug: isDev,
        transform: [...transforms, uglifyify]
    };
    const bundler = isDev ? watchify(browserify(Object.assign({}, watchify.args, opts))) : browserify(opts);
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
