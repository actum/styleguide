const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const kss = require('kss');
const kssConfig = require('../../kss-config.json');

gulp.task('styleguide', () => {
    kss(kssConfig, () => {
        browserSync.reload();
    });
});
