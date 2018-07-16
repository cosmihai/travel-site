var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprf = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('style', function() {
  return gulp.src('./app/assets/styles/style.css')
  .pipe(postcss([cssImport,mixins, nested, cssvars, hexrgba, autoprf]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});