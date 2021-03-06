
const {series, src, dest, watch, parallel} = require('gulp');
const gulp = require('gulp');
//css
const cssnano = require('cssnano');// comprime nuestro codigo css
const autoprefixer = require('autoprefixer');// se asegura que funcione en todos los navegadores
const postcss = require('gulp-postcss'); // hace las transforaciones es el enlace
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
 const imagemin = require('gulp-imagemin');
 const  avif = require('gulp-avif');
 //js
 const terser = require('gulp-terser');
 function imagen(done){
      
        const opciones={
            optimizationLevel: 50 
        };
        src('src/img/**/*.{png,jpg}')
            .pipe(imagemin(opciones))
            .pipe(dest('build/img'));
        done();
}

function css(done){
    src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'))
    done();
}
function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    done();
}
function js(done){
    src('src/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest('build/js'));
    done();
}

exports.css = css;
exports.js = js,
exports.dev = parallel(dev, js);
exports.imagen = imagen;