var gulp = require("gulp");
var sass = require('gulp-sass');


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

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('html:watch', function () {
  gulp.watch('./src/*.html', ['html']);
});

gulp.task('script:watch', function () {
  gulp.watch('./src/*.js', ['script']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('watch', ['sass:watch', 'html:watch', 'script:watch']);


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'script', 'html']);
