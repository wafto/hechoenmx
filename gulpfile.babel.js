'use strict';

import _ from 'lodash';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import watch from 'gulp-watch';

// SASS
import sass from 'gulp-sass';
import bourbon from 'node-bourbon';
import autoprefixer from 'gulp-autoprefixer';

// Webpack
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';

// Icofont
import iconfont from 'gulp-iconfont';
import iconfontCSS from 'gulp-iconfont-css';

// Images
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

function webpackTask(callback, watch) {
  let config = webpackConfig;

  if (watch) {
    config = _.assign({}, config, {
      watch: true
    });
  }

  let stream =  gulp.src('./client/app/app.js')
      .pipe(webpack(config))
      .pipe(gulp.dest('./public/assets'));

  if (config.watch) {
    callback();
  } else {
    return stream;
  }
}

gulp.task('webpack', webpackTask);
gulp.task('webpack:watch', (callback) => {
  return webpackTask(callback, true);
});

gulp.task('sass', () => {
  return gulp.src('./client/assets/scss/app.scss')
    .pipe(sass.sync({
      includePaths: [
        './node_modules/bootstrap-sass/assets/stylesheets',
        bourbon.includePaths,
        './node_modules'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('iconfont', function() {
  return gulp.src('./client/assets/svg/**/*.svg')
    .pipe(iconfontCSS({
      path: './client/assets/scss/common/iconfont_template.scss',
      fontName: 'IconFont',
      targetPath: '../../client/assets/scss/common/_icons.scss',
      fontPath: '/assets/'
    }))
    .pipe(iconfont({
      fontName: 'IconFont',
      normalize: true
    }))
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('images', () => {
  return gulp.src('./client/assets/images/**/')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('clean', () => {
  return del(['./public/assets']);
});

gulp.task('build', (callback) => {
  runSequence('clean', 'iconfont', 'sass', 'images', 'webpack', callback);
});

gulp.task('watch', () => {
  watch('./client/assets/scss/**/*.scss', () => gulp.start('sass'));
  watch('./client/assets/images/**/*', () => gulp.start('images'));
  watch('./client/assets/svg/**/*.svg', () => gulp.start('iconfont'));
});

gulp.task('default', (callback) => {
  runSequence('clean', 'iconfont', 'sass', 'images', 'webpack:watch', 'watch', callback);
});