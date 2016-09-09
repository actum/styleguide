const config = require('../config');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpif = require('gulp-if');

const gulpfile = config.paths.gulpfile;
const src = config.paths.src;

const lint = (globs) => {
    const opts = {
        'rules': {
            'no-empty': 0,
            'space-in-parens': 0,
            'no-unused-vars': 0,
            'no-multiple-empty-lines': 0
        }
    };
    return gulp.src(globs)
        .pipe(eslint(opts))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
};
gulp.task('lint:app', () => lint(src.app.all));
gulp.task('lint:gulpfile', () => lint(gulpfile));
gulp.task('lint', ['lint:gulpfile', 'lint:app']);
