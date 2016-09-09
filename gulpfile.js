// Gulp plugins configuration
const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default',['serve']);
gulp.task('build', ['prepare']);
gulp.task('css', ['styles']);
