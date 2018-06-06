var gulp = require('gulp');
var serve = require('gulp-serve');

// gulp.task('serve', serve('public'));
// gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve', serve({
    root: ['./' ],
    port: 4000

}));