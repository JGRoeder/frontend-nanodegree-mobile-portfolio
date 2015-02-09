var gulp      = require('gulp'),
    imagemin  = require('gulp-imagemin'),
    cssmin    = require('gulp-cssmin'),
    htmlmin   = require('gulp-htmlmin'),
    inline    = require('gulp-inline'),
    minline   = require('gulp-minify-inline'),
    uglify    = require('gulp-uglify');


var config = {
  "build": "dist",
  "images": {
    "source": "img/*",
    "target": "/img",
    "views": "images/"
  },
  "css": {
    "source": "css/*",
    "target": "/css"
  },
  "js": {
    "source": "js/*",
    "target": "/js"
  },
  "html": {
    "source": "*.html",
    "target": "/"
  },
  "views": {
    "images": {
      "source": "views/images/*",
      "target": "/views/images"
    },
    "html": {
      "source": "views/*.html",
      "target": "/views"
    },
    "css": {
      "source": "views/css/*",
      "target": "/views/css"
    },
    "js": {
      "source": "views/js/*",
      "target": "/views/js"
    }
  }
};


gulp.task('views-css', function () {
  return gulp.src(config.views.css.source)
  .pipe(cssmin())
  .pipe(gulp.dest(config.build + config.views.css.target))
});

gulp.task('views-html', function () {
  return gulp.src(config.views.html.source)
    .pipe(inline({ base: 'views/'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(minline())
  .pipe(gulp.dest(config.build + config.views.html.target))
})

gulp.task('views-js', function () {
  return gulp.src(config.views.js.source)
  .pipe(uglify())
  .pipe(gulp.dest(config.build + config.views.js.target))
})

gulp.task('views-img', function() {
  return gulp.src(config.views.images.source)
    .pipe(imagemin({
      progressive: true,
    }))
  .pipe(gulp.dest(config.build + config.views.images.target));
});

gulp.task('css', function () {
  return gulp.src(config.css.source)
  .pipe(cssmin())
  .pipe(gulp.dest(config.build + config.css.target))
});

gulp.task('html', function () {
  return gulp.src(config.html.source)
  .pipe(inline())
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(minline())
  .pipe(gulp.dest(config.build + config.html.target))
});

gulp.task('js', function () {
  return gulp.src(config.js.source)
  .pipe(uglify())
  .pipe(gulp.dest(config.build + config.js.target))
});

gulp.task('img', function() {
  return gulp.src(config.images.source)
  .pipe(imagemin({
    progressive: true,
  }))
  .pipe(gulp.dest(config.build + config.images.target));
});

gulp.task('build', ['html','css','js','img','views-html','views-css','views-js','views-img']);

gulp.task('default', ['build']);
