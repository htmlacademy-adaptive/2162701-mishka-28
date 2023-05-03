import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import squoosh from 'gulp-libsquoosh';
import terser from 'gulp-terser';
import {deleteAsync} from 'del';
import svgo from 'gulp-svgmin';
import { stacksvg } from "gulp-stacksvg";

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso ()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

export const html = () => {
   return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

//Scripts

export const scripts = () => {
   return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'));
}

//Images

export const optimizeImages = () => {
   return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

export const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(gulp.dest('build/img'));
}

//WebP

export const createwebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest('build/img'));
}

//SVG

export const stack = () => {
  return gulp.src('source/icons/*.svg')
  .pipe(svgo())
  .pipe(stacksvg({ output: `sprite` }))
    .pipe(gulp.dest('build/icons'));
}

//Clean

export const clean = () => {
  return deleteAsync('build');
}

//Copy

export const copy = (done) => {
  gulp.src ([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/manifest.webmanifest',
    'source/favicon/*.{png,svg}'
  ], {
    base: 'source'
  })
  .pipe (gulp.dest('build'))
  done ();
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

//Reload

const reload = (done) => {
  browser.reload ();
  done ();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html', gulp.series (html, reload));
  gulp.watch('source/js/*.js', gulp.series(scripts));
}

//Build

export const build = gulp.series (
  clean,
  copy,
  optimizeImages,
  gulp.parallel (
    styles,
    html,
    scripts,
    stack,
    createwebp
  )
);

//Detault

export const detault = gulp.series (
  clean,
  copy,
  copyImages,
  gulp.parallel (
    styles,
    html,
    scripts,
    stack,
    createwebp
  ),
  gulp.series (
    server,
    watcher
  )
);


export default gulp.series(
 html, styles, server, watcher
);
