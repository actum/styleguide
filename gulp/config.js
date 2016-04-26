export default {
    paths: {
        gulpfile: './gulpfile.babel.js',
        src: {
            base: './src',
            bower: './src/bower',
            less: {
                base: './src/less',
                entry: './src/less/main.less',
                all: './src/less/**/*.less',
                dest: './styleguide/public'
            },
            app: {
                base: './src/app',
                entry: './src/app/app.js',
                all: './src/app/**/*.js',
                dest: './styleguide/public'
            },
            icon: {
                entry: './src/gfx/svg/*.svg',
                dest: './src/gfx/icon'
            },
            html: './src/*.hbs'
        },
        dist: {
            base: './dist',
            css: './dist/public/css',
            js: './dist/public/js',
            icon: './dist/public/gfx/icon',
            html: './dist'
        },
        boilerplate: {
            all: './boilerplate/**/*.less'
        },
        styleguide: {
            base: './styleguide',
            css: './styleguide/public/css',
            js: './styleguide/public/js'
        }
    },
    names: {
        css: {
            src: 'style.css',
            min: 'style.min.css'
        },
        js: {
            src: 'app.js',
            min: 'app.min.js'
        }
    }
}
