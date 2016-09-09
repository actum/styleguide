const gulp = require('gulp');
const runSequence = require('run-sequence');

const sequence = ['clean', 'copy', /*'icon',*/ ['styles', 'js'], 'styleguide'];

gulp.task('prepare', () => runSequence(...sequence));
