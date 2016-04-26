import gulp from 'gulp';
import { argv } from 'yargs';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import combiner from 'stream-combiner2';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import cssGlobbing from 'gulp-css-globbing';
import browserSync from 'browser-sync';
import config from '../config';

const { src, dist, styleguide } = config.paths;
const names = config.names;

gulp.task('less', () => {
    let postcssPlugins = [
        autoprefixer({browsers: ['last 1 version']})
    ];
    let postcssAfterPlugins = [
        cssnano()
    ];
    // Is there any reason for using stream-combiner?
    // I tested the same pipeline without it and it works fine.
    // But maybe I'm missing something…
    let combined = combiner.obj([
        gulp.src(src.less.entry),
        cssGlobbing({ extensions: ['.css', '.less'] }),
        sourcemaps.init(),
        less({
            paths: [src.less.base, src.bower]
        }),
        postcss(postcssPlugins),
        postcss(postcssAfterPlugins),
        sourcemaps.write(),
        rename(names.css.min),
        gulp.dest(dist.css),
        gulp.dest(styleguide.css),
        browserSync.stream()
    ]);
    return combined;
});
