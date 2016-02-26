var gulp=require('gulp'),
    gutil=require('gulp-util'),
    jshint=require('gulp-jshint'),
    uglify=require('gulp-uglify'),
    istanbul=require('gulp-istanbul'),
    tap = require('gulp-tap'),
    jasmine = require('gulp-jasmine'),
    concat = require('gulp-concat');
var Server = require('karma').Server;
var browserSync=require('browser-sync').create();
var _dirName = '/Users/anandkrishnankutty/GitProjects/UnitTest';
/*var connect=require('gulp-connect');

 gulp.task('connect',function()
 {
 connect.server({livereload:true});
 });
 gulp.task('html',function()
 {
 gulp.src('*.html').pipe(connect.reload());
 });
 gulp.task('js',function()
 {
 gulp.src('*.js').pipe(connect.reload());

 });
 gulp.task('css',function()
 {
 gulp.src('*.css').pipe(connect.reload);
 });
 gulp.task('watch',function()
 {
 gulp.watch('*.html',['html']);
 gulp.watch('*.js',['js']);
 gulp.watch('*.css',['css']);

 });
 gulp.task('default',['connect','watch']);*/
gulp.task('jshint',function()
{
    return gulp.src('*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();

    /*return gulp.src('.app/!*.js')
        // Right there
        .pipe(istanbul({includeUntested: true}))
        .on('finish', function () {
            gulp.src('./tests/!*.js')
                .pipe(jasmine())
                .pipe(istanbul.writeReports({
                    dir: './assets/unit-test-coverage',
                    reporters: [ 'lcov' ],
                    reportOpts: { dir: './assets/unit-test-coverage'}
                }));
        });*/
   /* return gulp.src(['app/!*.js'])
        .pipe(istanbul())
        .pipe(tap(function(f) {
            // Make sure all files are loaded to get accurate coverage data
            require(f.path);
        }))
        .on('end', function() {
            gulp.src(src)
                .pipe(jasmine())
                .pipe(istanbul.writeReports({
                    dir: './unit-test-coverage',
                    reporters: [ 'lcov' ],
                    reportOpts: { dir: './unit-test-coverage' }
                }));
        });*/
});
gulp.task('build-js',function()
{
    return gulp.src('app/**/*.js').pipe(concat('app.js')).pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()).pipe(gulp.dest('build'));

})
gulp.task('serve',function()
{
    browserSync.init(
        {
            server:{
                baseDir:'./'
            }
        });

    gulp.watch('*.js',['jshint','karma'],browserSync.reload);
    gulp.watch('*.html',browserSync.reload);
    gulp.watch('*.css',browserSync.reload);
});
