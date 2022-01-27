let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));


const browserSync = require('browser-sync').create();

async function style(){
    gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
}

async function watch(){
    gulp.watch('src/scss/**/*.scss', style)

    browserSync.init({
        server: '',
        notify: false
    })
}

async function start() {
    browserSync.init({
        server: '',
        notify: false
    })
}

exports.style = style;
exports.watch = watch;
