var syntax         = 'scss', // Syntax: sass or scss;
	gmWatch        = false; // ON/OFF GraphicsMagick watching "img/_src" folder (true/false). Linux install gm: sudo apt update; sudo apt install graphicsmagick

var gulp          = require('gulp')
	sass          = require('gulp-sass'),
	browserSync   = require('browser-sync'),
	concat        = require('gulp-concat'),
	uglify        = require('gulp-uglify'),
	cleancss      = require('gulp-clean-css'),
	rename        = require('gulp-rename'),
	autoprefixer  = require('gulp-autoprefixer'),
	notify        = require('gulp-notify'),
	rsync         = require('gulp-rsync'),
	imageResize   = require('gulp-image-resize'),
	imagemin      = require('gulp-imagemin'),
	uglifycss     = require('gulp-uglifycss'),
	svgmin        = require('gulp-svgmin'),
	del           = require('del');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('svg-minify',function(){
	return gulp.src([
		'app/img/_src/**/*.svg',
	])
	.pipe(svgmin())
	.pipe(gulp.dest('app/img/dst'));
});

gulp.task('png-minify',function(){
	return gulp.src([
		'app/img/_src/**/*.png',
	])
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/dst'));
});

gulp.task('jpg-minify',function(){
	return gulp.src([
		'app/img/_src/**/*.jpg',
	])
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/dst'));
});

gulp.task('gif-minify',function(){
	return gulp.src([
		'app/img/_src/**/*.gif',
	])
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/dst'));
});

// Sass|Scss Styles
gulp.task('styles', function() {
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.scss',
		'node_modules/slick-carousel/slick/slick-theme.scss',
		'app/'+syntax+'/**/*.'+syntax,
	])
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(concat('all.min.css'))
	// .pipe(uglifycss({
	// 	"maxLineLen": 80,
	// 	"uglyComments": true
	//   }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

// JS
gulp.task('scripts', function() {
	gulp.src([
		'app/js/src/modules/*.js',
		])
	.pipe(concat('modules.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js/dst'))
	.pipe(browserSync.reload({ stream: true }));
	
	gulp.src([
		'app/js/main.js', // Always at the end
		])
	.pipe(concat('main.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js/dst'))
	.pipe(browserSync.reload({ stream: true }));

	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'node_modules/slick-carousel/slick/slick.min.js',
		'node_modules/chart.js/dist/chart.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('app/js/dst'))
	.pipe(browserSync.reload({ stream: true }))
});

// Images @x1 & @x2 + Compression | Required graphicsmagick (sudo apt update; sudo apt install graphicsmagick)
gulp.task('img1x', function() {
	return gulp.src('app/img/_src/**/*.*')
	.pipe(imageResize({ width: '50%' }))
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/@1x/'))
});
gulp.task('img2x', function() {
	return gulp.src('app/img/_src/**/*.*')
	.pipe(imageResize({ width: '100%' }))
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/@2x/'))
});

// Clean @*x IMG's
gulp.task('cleanimg', function() {
	return del(['app/img/@*'], { force:true })
});

// HTML Live Reload
gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

// Deploy
gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('img', gulp.parallel('svg-minify', 'png-minify', 'jpg-minify', 'gif-minify'));

gulp.task('watch', function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch(['app/js/src/modules/*.js', 'libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gmWatch && gulp.watch('app/img/_src/**/*', gulp.parallel('img')); // GraphicsMagick watching image sources if allowed.
});
gmWatch ? gulp.task('default', gulp.parallel('img', 'styles', 'scripts', 'browser-sync', 'watch')) 
				: gulp.task('default', gulp.parallel('img', 'styles', 'scripts', 'browser-sync', 'watch'));


