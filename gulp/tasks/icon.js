const config = require('../config');
const gulp = require('gulp');
const path = require('path');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

const dist = config.paths.dist;
const src = config.paths.src;

gulp.task('icon', () => {
    return gulp.src(src.icon.entry)
        .pipe(svgmin((file) => {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest(src.icon.dest));
        // TODO adjust icons for styleguide structure
});
