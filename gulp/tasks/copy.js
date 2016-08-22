import gulp from 'gulp';
import merge from 'merge-stream';
import config from '../config';

const { src, dist } = config.paths;

gulp.task('copy', () => {
    const tpl = gulp.src(src.html)
        .pipe(gulp.dest(dist.html));

    const kssGeneratorFiles = gulp.src(src.kss.generator)
        .pipe(gulp.dest(dist.base));

    const kssJs = gulp.src(src.kss.js)
        .pipe(gulp.dest(dist.js));

    return merge(tpl, kssGeneratorFiles, kssJs);
});
