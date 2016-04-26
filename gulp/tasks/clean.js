import gulp from 'gulp';
import del from 'del';
import config from '../config';

const { dist, styleguide } = config.paths;
const buildedFiles = [dist.css, dist.js, styleguide.base];

gulp.task('clean', () => del(buildedFiles));