const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
let uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

const jsFiles=[
    './app/js/some.js',
    './app/js/login.js',
    './app/js/personal.js',
    './app/js/search.js'
     
];

const cssFiles=[
    //'./node_modules/normalize.css/normalize.css',
    './app/css/main.css',
    './app/css/login.css',
    './app/css/personal.css',
    './app/css/scroll.css',
    './app/css/chat.css',
    './app/css/search.css',
    './app/css/error.css'
];
function styles() {
    return gulp.src(cssFiles)
      .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: true
        }))
        .pipe(cleanCSS({level: 2}))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('some.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: './'        }
    });
    gulp.watch('./app/css/**/*.css', styles);
    gulp.watch('./app/js/**/*.js', scripts);
    gulp.watch('./app/sass/**/*.{sass,scss}', SASS);
    gulp.watch('./app/image/*', IMG);
    gulp.watch('*.html').on('change', browserSync.reload);
}
function clean() {
   return del(['dist/*']);
}
function SASS() {
    return gulp.src('./app/sass/**/*.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
}
function IMG(){
   return gulp.src('./app/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
}
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('SASS', SASS);
gulp.task('IMG', IMG);
gulp.task('dist', gulp.series(clean, gulp.parallel(SASS, IMG, styles, scripts)));
gulp.task('dev', gulp.parallel('dist','watch'));



