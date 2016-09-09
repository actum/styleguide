const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const config = require('../config');
const cssGlobbing = require('gulp-css-globbing');
const cssnano = require('cssnano');
const combiner = require('stream-combiner2');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const dist = config.paths.dist;
const names = config.names;
const src = config.paths.src;
const styleguide = config.paths.styleguide;

gulp.task('styles', () => {
    const postCssPlugins = [
        flexbugsFixes,
        autoprefixer({ browsers: ['last 2 versions'] }),
    ];
    const postCssDistPlugins = [
        cssnano({
            'reduceIdents': false
        })
    ];
    // Is there any reason for using stream-combiner?
    // I tested the same pipeline without it and it works fine.
    // But maybe I'm missing something…
    const combined = combiner.obj([
        gulp.src(src.styles.entry),
        cssGlobbing({ extensions: ['.css', '.scss'] }),
        sourcemaps.init(),
        sass().on('error', sass.logError),
        postcss(postCssPlugins),
        postcss(postCssDistPlugins),
        sourcemaps.write(),
        rename(names.css.min),
        gulp.dest(dist.css),
        gulp.dest(styleguide.css),
        browserSync.stream()
    ]);
    return combined;
});
