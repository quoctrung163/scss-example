const {src, dest} = require('gulp');
const sass = require('gulp-sass');

function compiler() {
    return src('./style.scss')
            .pipe(sass())
            .pipe(dest('./css'))
}

exports.scss = compiler