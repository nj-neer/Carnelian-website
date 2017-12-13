var gulp = require("gulp");
var sass = require('gulp-sass');

var dep = [
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "./node_modules/animate.css/animate.min.css",
  "./node_modules/mdi/css/materialdesignicons.min.css"
];

var fonts = [
  "./node_modules/mdi/fonts/*",
  "./src/fonts/Roboto-Thin.ttf"
];


gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('script', function () {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('img', function () {
  return gulp.src([
    './src/*.png',
    './src/*.svg',
    './src/*.jpg'
  ])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dependencies', function () {
  return gulp.src(dep)
    .pipe(gulp.dest('./dist/dep'));
});

gulp.task('fonts', function () {
  return gulp.src(fonts)
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('html:watch', function () {
  gulp.watch('./src/*.html', ['html']);
});

gulp.task('script:watch', function () {
  gulp.watch('./src/*.js', ['script']);
});

gulp.task('img:watch', function () {
  gulp.watch('./src/*.png', ['img']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('watch', ['sass:watch', 'html:watch', 'script:watch', 'img:watch']);


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'script', 'html', 'img', 'fonts', 'dependencies']);
