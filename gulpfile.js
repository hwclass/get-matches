var gulp = require('gulp');
var exec = require('child_process').exec;
var argv = require('yargs').argv;
var criterias = ['country', 'geo', 'gender', 'preferences'];

gulp.task('get-matches', function (cb) {
  console.log(argv);
  exec('npm run get-matches' + ' -- --country='+argv['country'] + ' --geo='+argv['geo'] + ' --gender='+argv['gender'] + ' --preferences='+argv['preferences'], function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
