module.exports = {
    port: 8771,
    paths: {
        gulpfile: './gulpfile.js',
        src: {
            base: './src',
            styles: {
                base: './src/styles',
                entry: './src/styles/main.scss',
                all: './src/styles/**/*.scss',
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
            html: './src/*.hbs',
            kss: {
                generator: [
                    './src/custom_kss_handlebars_generator.js',
                    './src/package.json',
                    './src/template_config.js'
                ],
                js: './src/public/kss.js'
            }
        },
        dist: {
            base: './dist',
            css: './dist/public/css',
            js: './dist/public/js',
            icon: './dist/public/gfx/icon',
            html: './dist'
        },
        boilerplate: {
            all: './boilerplate/**/*.scss'
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
            min: 'sg.min.js'
        }
    }
};
