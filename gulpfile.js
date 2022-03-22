const { src, dest, watch, parallel } = require("gulp")

// CSS
const sass = require("gulp-sass")(require("sass"))
const plumber = require("gulp-plumber")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const postcss = require("gulp-postcss")
const sourcemaps = require("gulp-sourcemaps")

// JS
const terser = require("gulp-terser-js")

// Imágenes
const cache = require("gulp-cache")
const imagemin = require("gulp-imagemin")
const webp = require("gulp-webp")
const avif = require("gulp-avif")

function css(done) {
    src("src/scss/**/*.scss") // Identificar SCSS
        .pipe(sourcemaps.init()) // Para no perder la referencia original
        .pipe(plumber()) // No detener el workflow en errores
        .pipe(sass()) // Compilar
        .pipe(postcss([autoprefixer(), cssnano()])) // Paridad entre navegadores y Mejoras de optimización
        .pipe(sourcemaps.write(".")) // Guardar en la misma carpeta que el CSS
        .pipe(dest("build/css")) // Almacenar

    done()
}

function c_webp(done) {
    const opciones = {
        quality: 50,
    }

    src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones)) // Convertir a Webp
    .pipe(dest("build/img")) // Almacenar
    
    done()
}

function c_avif(done) {
    const opciones = {
        quality: 50,
    }

    src("src/img/**/*.{png,jpg}")
    .pipe(avif(opciones)) // Convertir a Webp
    .pipe(dest("build/img")) // Almacenar
    
    done()
}

function a_imagen(done){
    const opciones = {
        optimizationLevel: 3,
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones))) // Aligerar imagen
        .pipe(dest("build/img")) // Almacenar
    
    done()
}

function js(done) {
    src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/js"))

    done()
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", js);
    done()
}

exports.css = css;
exports.js = js;
exports.a_imagen = a_imagen;
exports.c_webp = c_webp;
exports.c_avif = c_avif;
exports.dev = parallel(a_imagen, c_avif, c_webp, dev);