var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		sourcemaps     = require('gulp-sourcemaps'),
		browserSync    = require('browser-sync'),
		del            = require('del'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify");

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scss', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}))
		.on('error', notify.onError(function(err) {
			return {
				title: 'Error SASS',
				message: err.message
			};
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('watch', ['scss', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('buildhtml', function() {
	gulp.src(['app/*.html'])
		.pipe(gulp.dest('dist/'));
});

gulp.task('removedist', function() { return del.sync('dist'); });

gulp.task('build', ['removedist', 'buildhtml', 'scss'], function() {

	var buildCss = gulp.src('app/css/**/*').pipe(gulp.dest('dist/css'));
	var buildFonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
	var buildJs = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));
	var buildJs = gulp.src('app/img/**/*').pipe(gulp.dest('dist/img'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'pixel.beget.com',
		user:      'molodin_l',
		password:  '123456l',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**'
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/one'));

});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
