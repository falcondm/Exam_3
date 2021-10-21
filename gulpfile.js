let project_folder = 'dist';
let source_folder = 'src';

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/scss/main.scss',
        js: source_folder + '/js/**.js',
        img: source_folder + '/img/**/*.{jpg,jpeg,png,svg,webp,ico,webm}',
        fonts: source_folder + '/fonts/**/*.{ttf,otf,woff,woff2}',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,jpeg,png,svg,webp,ico}',
    },
    clean: './' + project_folder + '/'
}


const { src, dest } = require('gulp');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false,
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(scss({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

// function js() {
//     browserify({
//         entries: [path.src.js],
//         debug: true,
//         transform: [
//           babelify.configure({ presets: ['@babel/preset-env'] }),
//         ],
//     })
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(dest(path.build.js))
//     .pipe(buffer())
//     .pipe(browsersync.stream())
// }

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}

function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(fonts, img, js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.img = img;
exports.js = js;
exports.css = css;
exports.build = build;
exports.html = html;
exports.watch = watch;
exports.default = watch;