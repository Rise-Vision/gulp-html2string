gulp-html2string
================
[![Build Status](https://travis-ci.org/settinghead/meteor-auto-nprogress.svg?branch=master)](https://travis-ci.org/settinghead/meteor-auto-nprogress)

A [Gulp](http://gulpjs.com/) plugin that converts static HTML templates to JavaScript strings.

Code derived from [gulp-html2js](https://github.com/fraserxu/gulp-html2js).

### Installation
```bash
npm install gulp-html2string
```

## Usage

In your project's gulpfile.js, create the following task:

```javascript

var html2string = require('gulp-html2string');

gulp.task('html2js', function () {
    return gulp.src('html/*.html')
      .pipe(html2string({
        base: path.join(__dirname, 'html'), //The base path of HTML templates
        createObj: true, // Indicate wether to define the global object that stores
                         // the global template strings
        objName: 'TEMPLATES'  // Name of the global template store variable
                              //say the converted string for myTemplate.html will be saved to TEMPLATE['myTemplate.html']
      }))
      .pipe(rename({extname: '.js'}))
      .pipe(gulp.dest('templates/')); //Output folder
  });

```

Then run
```bash
gulp html2js
```
and your converted JS files will be saved under ./templates/.

## Tests

Run
```bash
npm run test
```

See /test/test.js for an example usage.
