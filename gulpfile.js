var gulp=require('gulp'),
    jshint=require('gulp-jshint');
var browserSync=require('browser-sync').create();
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
gulp.task('serve',function()
{
    browserSync.init(
        {
            server:{
                baseDir:'./'
            }
        });

    gulp.watch('*.js',['jshint'],browserSync.reload);
    gulp.watch('*.html',browserSync.reload);
    gulp.watch('*.css',browserSync.reload);
});
