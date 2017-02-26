var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpTypeScript = require("gulp-typescript");
var typeScriptProject = gulpTypeScript.createProject("tsconfig.json");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

gulp.task('compileTypeScript', [], function () {
	console.log('compiling all type script files');
    return typeScriptProject.src()
        .pipe(typeScriptProject())
        .js.pipe(gulp.dest('build'));
});

gulp.task('default', ['compileTypeScript'], function() {
	console.log("Combining all js to build file");
//  return gulp.src("build/**.js")
//      .pipe(concat('build.js'))
//      .pipe(gulp.dest('build'));
  
	  browserify({
	      basedir: '.',
	      debug: true,
	      entries: ['source/application/main.ts'],
	      cache: {},
	      packageCache: {}
	  })
	  .plugin(tsify)
	  .bundle()
	  .pipe(source('build.js'))
	  .pipe(gulp.dest('build'));
	  
	  console.log('done');
});

//
//
//gulp.task('watch', [], function() {
//	return gulp.watch(['source/application/**.ts'], ['default']);
//});