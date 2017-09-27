const gulp = require('gulp')
const concat = require('gulp-concat')
const del = require('del')
const csso = require('gulp-csso')
const htmlminify  = require('gulp-html-minify')
const uglify  = require('gulp-uglify')

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(concat('dist.css'))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(concat('dist.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlminify())
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', function() {
  return del('dist/')
})

gulp.task('default', function() {
  console.log("启动Gulp-default任务")
})
