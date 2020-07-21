/* Variable Definition */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rtlcss = require('gulp-rtlcss');
var header = require('gulp-header');

/* Tasks */
var cssDir = 'src/assets/css/';
var scssDir = 'src/scss/';
var scssLayoutsDir = scssDir + 'layouts/';

var layouts = [
  {
    path: 'default',
    themes: [
      {
        srcFileName: 'main-dark',
        destFileName: 'theme-dark',
        rtl: true
      },
      {
        srcFileName: 'main-light',
        destFileName: 'theme-light',
        rtl: true
      },
      {
        srcFileName: 'main-light',
        destFileName: 'theme-light-style',
        rtl: true,
        colors: [
          {
            primary: '#2ac174',
            secondary: '#189fde'
          },
          {
            primary: '#f06f11',
            secondary: '#0683e5'
          },
          {
            primary: '#d61f1f',
            secondary: '#f7b528'
          },
          {
            primary: '#7b18f6',
            secondary: '#56b5d8'
          },
          {
            primary: '#2f46bc',
            secondary: '#cbb444'
          },
          {
            primary: '#e5281a',
            secondary: '#36272d'
          },
          {
            primary: '#40528c',
            secondary: '#eda722'
          },
          {
            primary: '#0857ad',
            secondary: '#f95738'
          },
          {
            primary: '#0085c1',
            secondary: '#72bef0'
          }
        ]
      },
      {
        srcFileName: 'main-semidark',
        destFileName: 'theme-semidark',
        rtl: true
      },
      {
        srcFileName: 'main-semidark',
        destFileName: 'theme-semidark-style',
        rtl: true,
        colors: [
          {
            primary: '#2ac174',
            secondary: '#189fde'
          },
          {
            primary: '#f06f11',
            secondary: '#0683e5'
          },
          {
            primary: '#d61f1f',
            secondary: '#f7b528'
          },
          {
            primary: '#7b18f6',
            secondary: '#56b5d8'
          },
          {
            primary: '#2f46bc',
            secondary: '#cbb444'
          },
          {
            primary: '#e5281a',
            secondary: '#36272d'
          },
          {
            primary: '#40528c',
            secondary: '#eda722'
          },
          {
            primary: '#0857ad',
            secondary: '#f95738'
          },
          {
            primary: '#0085c1',
            secondary: '#72bef0'
          }
        ]
      }
    ]
  },
  {
    path: 'crm',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'back-office',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'back-office-mini',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'modern',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'intranet',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'saas',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  },
  {
    path: 'listing',
    themes: [
      {
        srcFileName: 'main',
        destFileName: 'theme',
        rtl: true
      }
    ]
  }
];
var styleTasks = [];

layouts.forEach(function (layout) {
  var watchLayoutTasks = [];
  layout.themes.forEach(function (theme) {
    if (theme.colors) {
      theme.colors.forEach(function (color, index) {
        var watchTasks = [];

        // Compressed css
        var taskMinCss = 'min-style-' + layout.path + '-' + theme.srcFileName + '-color-' + (index + 2);
        styleTasks.push(taskMinCss);
        watchTasks.push(taskMinCss);
        watchLayoutTasks.push(taskMinCss);

        gulp.task(taskMinCss, function () {
          return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
            .pipe(header('$app-primary: ' + color.primary + ';$app-secondary: ' + color.secondary + ';'))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(autoprefixer({
              cascade: false
            }))
            .pipe(concat(theme.destFileName + '-' + (index + 2) + '.min.css'))
            .pipe(gulp.dest(cssDir + layout.path + '/'));
        });

        // Expanded css
        var taskExtCss = 'style-' + layout.path + '-' + theme.srcFileName + '-color-' + (index + 2);
        styleTasks.push(taskExtCss);
        watchTasks.push(taskExtCss);
        watchLayoutTasks.push(taskExtCss);

        gulp.task(taskExtCss, function () {
          return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
            .pipe(header('$app-primary: ' + color.primary + ';$app-secondary: ' + color.secondary + ';'))
            .pipe(sass())
            .pipe(autoprefixer({
              cascade: false
            }))
            .pipe(concat(theme.destFileName + '-' + (index + 2) + '.css'))
            .pipe(gulp.dest(cssDir + layout.path + '/'));
        });

        if (theme.rtl) {
          // Compressed rtl css
          var taskMinRtlCss = 'min-style-rtl-' + layout.path + '-' + theme.srcFileName + '-color-' + (index + 2);
          styleTasks.push(taskMinRtlCss);
          watchTasks.push(taskMinRtlCss);
          watchLayoutTasks.push(taskMinRtlCss);

          gulp.task(taskMinRtlCss, function () {
            return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
              .pipe(header('$app-primary: ' + color.primary + ';$app-secondary: ' + color.secondary + ';'))
              .pipe(sass({outputStyle: 'compressed'}))
              .pipe(rtlcss())
              .pipe(autoprefixer({
                cascade: false
              }))
              .pipe(concat(theme.destFileName + '-' + (index + 2) + '-rtl.min.css'))
              .pipe(gulp.dest(cssDir + layout.path + '/'));
          });

          // Expanded rtl css
          var taskExtRtlCss = 'style-rtl-' + layout.path + '-' + theme.srcFileName + '-color-' + (index + 2);
          styleTasks.push(taskExtRtlCss);
          watchTasks.push(taskExtRtlCss);
          watchLayoutTasks.push(taskExtRtlCss);

          gulp.task(taskExtRtlCss, function () {
            return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
              .pipe(header('$app-primary: ' + color.primary + ';$app-secondary: ' + color.secondary + ';'))
              .pipe(sass())
              .pipe(rtlcss())
              .pipe(autoprefixer({
                cascade: false
              }))
              .pipe(concat(theme.destFileName + '-' + (index + 2) + '-rtl.css'))
              .pipe(gulp.dest(cssDir + layout.path + '/'));
          });
        }

        // watch task
        gulp.task('watch:' + layout.path + '-color-' + (index + 2), function () {
          return gulp.watch([scssDir], gulp.series(watchTasks));
        });
      });
    } else {
      var watchTasks = [];

      // Compressed css
      var taskMinCss = 'min-style-' + layout.path + '-' + theme.srcFileName;
      styleTasks.push(taskMinCss);
      watchTasks.push(taskMinCss);
      watchLayoutTasks.push(taskMinCss);

      gulp.task(taskMinCss, function () {
        return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
          .pipe(sass({outputStyle: 'compressed'}))
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(concat(theme.destFileName + '.min.css'))
          .pipe(gulp.dest(cssDir + layout.path + '/'));
      });

      // Expanded css
      var taskExtCss = 'style-' + layout.path + '-' + theme.srcFileName;
      styleTasks.push(taskExtCss);
      watchTasks.push(taskExtCss);
      watchLayoutTasks.push(taskExtCss);

      gulp.task(taskExtCss, function () {
        return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
          .pipe(sass())
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(concat(theme.destFileName + '.css'))
          .pipe(gulp.dest(cssDir + layout.path + '/'));
      });

      // compile RTL css
      if (theme.rtl) {

        // Compressed RTL css
        var taskMinRtlCss = 'min-style-rtl-' + layout.path + '-' + theme.srcFileName;
        styleTasks.push(taskMinRtlCss);
        watchTasks.push(taskMinRtlCss);
        watchLayoutTasks.push(taskMinRtlCss);

        gulp.task(taskMinRtlCss, function () {
          return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rtlcss())
            .pipe(autoprefixer({
              cascade: false
            }))
            .pipe(concat(theme.destFileName + '-rtl.min.css'))
            .pipe(gulp.dest(cssDir + layout.path + '/'));
        });

        // Expanded RTL css
        var taskExtRtlCss = 'style-rtl-' + layout.path + '-' + theme.srcFileName;
        styleTasks.push(taskExtRtlCss);
        watchTasks.push(taskExtRtlCss);
        watchLayoutTasks.push(taskExtRtlCss);

        gulp.task(taskExtRtlCss, function () {
          return gulp.src(scssLayoutsDir + layout.path + '/' + theme.srcFileName + '.scss', {allowEmpty: true})
            .pipe(sass())
            .pipe(rtlcss())
            .pipe(autoprefixer({
              cascade: false
            }))
            .pipe(concat(theme.destFileName + '-rtl.css'))
            .pipe(gulp.dest(cssDir + layout.path + '/'));
        });
      }

      // watch task
      gulp.task('watch:' + layout.path + '-' + theme.srcFileName, function () {
        return gulp.watch([scssDir], gulp.series(watchTasks));
      });
    }
  });

  // watch task
  gulp.task('watch:' + layout.path, function () {
    return gulp.watch([scssDir], gulp.series(watchTasks));
  });
});

gulp.task('default', gulp.series(styleTasks));
