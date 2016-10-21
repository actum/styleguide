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
                dest: './styleguide/sg'
            },
            app: {
                base: './src/app',
                entry: './src/app/app.js',
                all: './src/app/**/*.js',
                dest: './styleguide/sg'
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
                js: './src/sg/kss.js'
            }
        },
        dist: {
            base: './dist',
            css: './dist/sg/css',
            js: './dist/sg/js',
            icon: './dist/sg/gfx/icon',
            html: './dist'
        },
        boilerplate: {
            all: './boilerplate/**/*.scss'
        },
        styleguide: {
            base: './styleguide',
            css: './styleguide/sg/css',
            js: './styleguide/sg/js'
        }
    },
    names: {
        css: {
            src: 'style.css',
            min: 'sg-style.min.css'
        },
        js: {
            src: 'app.js',
            min: 'sg-app.min.js'
        }
    }
};
