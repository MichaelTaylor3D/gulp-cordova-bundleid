/*
* Author: Michael Taylor
* www.michaeltaylor3d.com
* 
* usage: 
* put 
*    gulp.task('cordova', require('gulp-cordova-bump'));
* into your gulpfile
*/

'use strict';

var vfs = require('vinyl-fs');
var args = require("yargs").argv;
var gutil = require('gutil');
var $ = require('gulp-load-plugins')();

/*
* main functions -----------------------
*/

function Bundle() {}

Bundle.prototype.run = function() {
  } else if (args.bundle) {
    this.set(args.bundle);
  } else {
    this.help();
  }
}

Bundle.prototype.set = function(bundleid) {

  this.pluginMessage();

  return vfs.src(['./config.xml'])
    .pipe($.xmlEditor([
        { path: '.', attr: { 'id': bundleid } } 
    ]))
  .pipe(vfs.dest("./"));
}

/*
* helper functions -----------------------
*/

Bundle.prototype.pluginMessage = function() {
  gutil.log("\n\tRemember to run this before you run cordova build\n");
}

Bundle.prototype.help = function() {
  gutil.log('\n\tUSAGE:\n\t\t$ gulp cordova --bundle=com.example.yourapp\n');
}

/*
* module function -----------------------
*/

var init = new Bundle();
module.exports = init.run();
