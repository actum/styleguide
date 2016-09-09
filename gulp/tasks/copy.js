const config = require('../config');
const gulp = require('gulp');
const merge = require('merge-stream');

const dist = config.paths.dist;
const src = config.paths.src;

gulp.task('copy', () => {
    const tpl = gulp.src(src.html)
        .pipe(gulp.dest(dist.html));

    const kssGeneratorFiles = gulp.src(src.kss.generator)
        .pipe(gulp.dest(dist.base));

    const kssJs = gulp.src(src.kss.js)
        .pipe(gulp.dest(dist.js));

    return merge(tpl, kssGeneratorFiles, kssJs);
});
