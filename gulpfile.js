const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
let uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

const jsFiles=[
    './app/js/some.js'

];

const cssFiles=[
    //'./node_modules/normalize.css/normalize.css',
    './app/css/main.css',
  //  './app/css/header.css'
];


function styles() {
    return gulp.src(cssFiles)
      //  .pipe(concat('main.css'))
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
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/sass/**/*.{sass,scss}', SASS);
    gulp.watch('./app/image/*', IMG);
}

function clean() {
   return del(['dist/*']);
}

function SASS() {
    return gulp.src('./app/sass/**/*.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('app/css'))
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



