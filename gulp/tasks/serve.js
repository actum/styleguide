const browserSync = require('browser-sync');
const config = require('../config');
const copyToClipboard = require('copy-paste').copy;
const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');

const boilerplate = config.paths.boilerplate;
const dist = config.paths.dist;
const gulpfile = config.paths.gulpfile;
const port = config.port;
const src = config.paths.src;
const styleguide = config.paths.styleguide;

gulp.task('serve', ['prepare'], () => {
    browserSync({
        open: false,
        port,
        server: styleguide.base
    }, () => copyToClipboard(`localhost:${port}`, () => gutil.log(gutil.colors.green('Local server address has been copied to your clipboard'))));

    const sanitize = pathname => pathname.replace(/^\.\//, '');
    const watch = (pathname, tasks) => gulp.watch(sanitize(pathname), tasks);

    watch(src.styles.all, ['styles']);
    watch(src.icon.entry, ['icon']);
    watch(src.app.all, ['lint:app']);
    watch(gulpfile, ['lint:gulpfile']);
    watch(src.html, () => runSequence('copy', 'styleguide'));
    watch(boilerplate.all, ['styleguide']);
});
