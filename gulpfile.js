var gulp = require('gulp');
var webpack = require('webpack-stream');
var nodemon = require('nodemon');
var concat = require('gulp-concat');

var paths = {
	jsx: ['./src/*.jsx', './src/components/*.jsx'],
	js: ['./src/*.js', './src/controllers/*.js']
}

gulp.task('jsx', function() {
	return gulp.src('./src/main.jsx')
		.pipe(webpack({
			watch: true,
			module: {
				loaders: [
					{ test: /\.jsx$/, loaders: ['babel']}
				]
			},
			output: {
				filename: 'main.js'
			}
		}))
		.pipe(gulp.dest('./public/javascripts/'))
});

gulp.task('js', function() {
	return gulp.src(paths.js)
		.pipe(concat('browser.js'))
		.pipe(gulp.dest('./public/javascripts/'))
});

gulp.task('watch', function() {
	gulp.start(['jsx', 'js']);
	gulp.watch([paths.jsx, paths.js], ['jsx', 'js']);
});