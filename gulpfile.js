
const {series, src, dest, watch, parallel} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
 const imagemin = require('gulp-imagemin');
 const  avif = require('gulp-avif');
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
    .pipe(sass())
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
    .pipe(dest('build/js'));
    done();
}

exports.css = css;
exports.js = js,
exports.dev = parallel(dev, js);
exports.imagen = imagen;