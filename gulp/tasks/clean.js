const config = require('../config');
const del = require('del');
const gulp = require('gulp');

const dist = config.paths.dist;
const styleguide = config.paths.styleguide;
const buildedFiles = [dist.css, dist.js, styleguide.base];

gulp.task('clean', () => del(buildedFiles));
