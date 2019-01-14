var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var del = require("del");
var webserver = require("gulp-webserver");
var livereload = require("gulp-livereload");

var dependencies = {
  js: [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
  css: [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/animate.css/animate.min.css",
    "./node_modules/@mdi/font/css/materialdesignicons.min.css"
  ]
};

var fonts = ["./node_modules/@mdi/font/fonts/*", "./src/fonts/Roboto-Thin.ttf"];

gulp.task("sass", function() {
  return gulp
    .src("./src/*.scss")
    .pipe(sass().on("error", sass.logError))

    .pipe(gulp.dest("./dist/"))
    .pipe(livereload());
});

gulp.task("clean:dist", function() {
  return del("./dist", { force: true });
});

gulp.task("html", function() {
  return gulp
    .src("./src/*.html")
    .pipe(gulp.dest("./dist/"))
    .pipe(livereload());
});

gulp.task("script", function() {
  return gulp
    .src("./src/*.js")
    .pipe(gulp.dest("./dist/"))
    .pipe(livereload());
});

gulp.task("img", function() {
  return gulp
    .src("./src/img/**/*")
    .pipe(gulp.dest("./dist/img"))
    .pipe(livereload());
});

gulp.task("video", function() {
  return gulp
    .src("./src/video/**/*")
    .pipe(gulp.dest("./dist/video"))
    .pipe(livereload());
});

gulp.task("dependencies:js", function() {
  return gulp
    .src(dependencies.js)
    .pipe(concat("dependencies.js"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("dependencies:css", function() {
  return gulp
    .src(dependencies.css)
    .pipe(concat("dependencies.css"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("webserver", function() {
  gulp.src("dist").pipe(
    webserver({
      fallback: "index.html",
      livereload: true,
      open: false
    })
  );
});

gulp.task("fonts", function() {
  return gulp.src(fonts).pipe(gulp.dest("./dist/fonts"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/**/*.scss", ["sass"]);
});

gulp.task("html:watch", function() {
  gulp.watch("./src/*.html", gulp.series("html"));
});

gulp.task("script:watch", function() {
  gulp.watch("./src/*.js", gulp.series("script"));
});

gulp.task("img:watch", function() {
  gulp.watch("./src/*.png", gulp.series("img"));
});

// The default task (called when you run `gulp` from cli)
gulp.task(
  "default",
  gulp.series(
    "clean:dist",
    gulp.parallel(
      "sass",
      "script",
      "html",
      "img",
      "video",
      "fonts",
      "dependencies:css",
      "dependencies:js"
    )
  )
);

// The default task (called when you run `gulp` from cli)
gulp.task("watch", function() {
  livereload.listen();

  gulp.parallel("sass:watch", "html:watch", "script:watch", "img:watch");
});

gulp.task("dev", gulp.series("default", gulp.parallel("watch", "webserver")));
