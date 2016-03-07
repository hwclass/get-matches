/*!
 * gulpfile.js.
 *
 * Copyright (c) 2015 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : March 2016
 * Version : 1.0.0
 * Released: March 8th, 2016
 *
 *
 * Manages the tasks as creating a dummy db and querying it over get-matches method
 */

var gulp = require('gulp'),
    exec = require('child_process').exec,
    argv = require('yargs').argv,
    criterias = ['country', 'geo', 'gender', 'preferences'];

/**
 * task@prepare-db : Creates a new db over a pg instance and fullfill it with some dummy records
 * @noparam
 */
gulp.task('prepare-db', function (cb) {
  exec('npm run prepare-db', function (err, stdout, stderr) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(stdout);
      console.log('db created.');
    }
  })
})

/**
 * task@get-matches : Queries the current database for matching results
 * @noparam
 */
gulp.task('get-matches', function (cb) {
  exec('npm run get-matches' + ' -- --country='+argv['country'] + ' --geo='+argv['geo'] + ' --gender='+argv['gender'] + ' --preferences='+argv['preferences'], function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
