var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('get-matches', function (cb) {
  exec('ping localhost', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
