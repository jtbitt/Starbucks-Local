var gulp       = require('gulp');
var less       = require('gulp-less');
var minifyCSS  = require('gulp-clean-css');
var rename     = require('gulp-rename');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var nodemon    = require('gulp-nodemon');

gulp.task('css', function() {
    return gulp.src('src/assets/less/main.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/dist'));
});

gulp.task('js', function() {
    return gulp.src(['server.js', 'src/app/*.js', 'src/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/app/*.js', 'src/app/**/*.js', 'src/common/directives/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/assets/dist'));
});

gulp.task('angular', function() {
    return gulp.src(['src/app/*.js', 'src/app/**/*.js', 'src/common/directives/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(ngAnnotate())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/assets/dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/assets/less/main.less', ['css']);
    gulp.watch(['server.js', 'src/app/*.js', 'src/app/**/*.js'], ['js', 'angular']);
});

// the nodemon task
gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'js less html'
})
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function() {
        console.log('Restarted!');
    });
});

gulp.task('default', ['nodemon']);        
