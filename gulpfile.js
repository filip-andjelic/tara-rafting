var connect = require('gulp-connect');
var extend = require('util')._extend;
var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
//var imagemin = require('gulp-imagemin');
var config = extend({
    codeDirectory: {
        root: './code',
        js: './code/js/*.js',
        scss: './code/style/sass/application.scss',
        css: './code/style/*.css',
        html: './code/html/*.html'
    },
    destDirectory: {
        root: './app',
        jsFile: 'application.js',
        cssFile: 'application.css'
    },
    assetDirectory: {
        root: './assets/**/*',
        dir: './app/assets'
    },
    tmpDir: './.tmp',
    liveReloadPort: 35729,
    liveReloadClientPort: 35729
});
/* ---------------------------------------------------------------------------------------- */
function bringServerUp(livereload) {
  connect.server({
    root: './app',
    livereload: livereload ? livereload : true
  });
}
function optimizeImages() {
    var notSvgFilter = filter(['*/**', '!**/*.svg'], {restore: true});

    return gulp.src(config.assetDirectory.root + '/images/**/*')
        .pipe(notSvgFilter)
        .pipe(imagemin())
        .pipe(notSvgFilter.restore);
}
function copyStaticAssets() {
    //optimizeImages();

    return gulp.src(config.assetDirectory.root)
        .pipe(gulp.dest(config.assetDirectory.dir));
}

/* 
----------------------------------------------------------------------------------------
*/
gulp.task('bringServerUp', bringServerUp);
gulp.task('loadProjectAssets', copyStaticAssets);
gulp.task('bundleCodeFiles', ["buildCss", "buildJs", "buildHtml"]);
gulp.task('watchCodeFiles', function() {
    return watch(config.codeDirectory.root + "/**/*", "bundleCodeFiles")
    .pipe(connect.reload());
});
gulp.task('buildJs', function () {
    // @TODO set minification of *.js files
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/build/angular-ui-router.min.js',
        config.codeDirectory.js])
        .pipe(concat(config.destDirectory.jsFile))
        .pipe(gulp.dest(config.destDirectory.root))
});
gulp.task('compileSass', function () {
    return gulp.src([config.codeDirectory.scss])
        .pipe(sass())
        .pipe(concat('concatinatedSass.css'))
        .pipe(gulp.dest(config.tmpDir));
});
gulp.task('concatCssToTemp', function () {
    return gulp.src([config.codeDirectory.css])
        .pipe(concat('concatinatedCss.css'))
        .pipe(gulp.dest(config.tmpDir));
});
gulp.task('buildCss', ['compileSass', 'concatCssToTemp'], function () {
        return gulp.src([config.tmpDir + '/*.css'])
            .pipe(concat(config.destDirectory.cssFile))
            .pipe(gulp.dest(config.destDirectory.root));
});
gulp.task('buildHtml', function () {
    return gulp.src(['index.html'])
        .pipe(gulp.dest(config.destDirectory.root));
});
gulp.task('default', ["bringServerUp", "bundleCodeFiles"]);
gulp.task('project', ["bringServerUp", "loadProjectAssets", "bundleCodeFiles", "watchCodeFiles"]);

