import gulp from 'gulp';
import { argv } from 'yargs';
import config from '../config';
import kss from 'kss';
import browserSync from 'browser-sync';
// import kssConfig from '../../kss-config.json';

const { src, dist, styleguide } = config.paths;
const names = config.names;
const isDev = argv.dev || false;
const kssConfig = {
    // The source and destination paths are relative to this file
    source: [
        './boilerplate'
    ],
    destination: './styleguide',
    template: './dist',
    // The css and js paths are URLs relative to the generated style guide
    css: [
        '../bootstrap.min.css'
    ],
    copyCss: true,
    js: []
};

gulp.task('styleguide', () => {
    kss(kssConfig, () => {
        browserSync.reload();
    });
});