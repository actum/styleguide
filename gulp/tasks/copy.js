import gulp from 'gulp';
import config from '../config';

const { src, dist } = config.paths;

gulp.task('copy', () => {
    return gulp.src(src.html)
        .pipe(gulp.dest(dist.html));
});
