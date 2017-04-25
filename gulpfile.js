var gulp = require('gulp');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var short = require('postcss-short');
var sass = require('gulp-sass');
var pixtorem  = require('postcss-pxtorem');
var svgFragments  = require('postcss-svg-fragments');
var svgSprite = require('gulp-svg-sprite');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');

// используем препроцессор sass и постпроцессор postcss
gulp.task('css', function () {
    var processors = [
        cssnext, cssnano, short,
        pixtorem({
            propWhiteList: ['font-size', 'line-height'] // переводит указанные параметры в rem
        }),
        svgFragments
    ];
    return gulp.src('web/src/scss/*.scss')
        .pipe(sass())
        .pipe(concatCss("style.css"))
        .pipe(postcss(processors))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('web/public/css/'));
});

// следим за изменением файлов и автоматически вызываем задачи
gulp.task('watch', function () {
    gulp.run('css');
    gulp.run('svg');
    gulp.watch('web/src/scss/*.scss', function () {
        gulp.run('css');
    });
    gulp.watch('web/src/scss/lib/*.scss', function () {
        gulp.run('css');
    });
    gulp.watch('web/src/icons/*.svg', function () {
        gulp.run('svg');
    })
});

// формирование svg спрайта
gulp.task('svg', function () {
    return gulp.src('web/src/icons/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
                mode: {symbol: true},
                preview: false
            }
        ))
        .pipe(gulp.dest('web/src/icons'));
});


