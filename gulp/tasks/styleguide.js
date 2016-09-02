import gulp from 'gulp';
import { argv } from 'yargs';
import config from '../config';
import kss from 'kss';
import browserSync from 'browser-sync';
import kssConfig from '../../kss-config.json';

const { src, dist, styleguide } = config.paths;
const names = config.names;
const isDev = argv.dev || false;

gulp.task('styleguide', () => {
    kss(kssConfig, () => {
        browserSync.reload();
    });
});
