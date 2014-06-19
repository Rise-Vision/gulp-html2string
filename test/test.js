(function () {

  'use strict';

  var assert = require('assert');
  var gutil = require('gulp-util');
  var templateStrBuilder = require('../index.js');
  var join = require('path').join;
  var fs = require('fs');

  it('should compile HTML templates', function (cb) {
    var stream = templateStrBuilder({objName: 'TEH_TEMPLATES', createObj: true, base: __dirname});

    stream.on('data', function (data) {
      assert.equal(data.contents.toString(),
      'if(typeof TEH_TEMPLATES === \'undefined\') {var TEH_TEMPLATES = {};}\n' +
      'TEH_TEMPLATES[\'' + 'test-template.html' + '\'] = "<html>\\n" +' +
      '\n    "<head></head>\\n" +' +
      '\n    "<body class=\\\"hello\\\">Test, \'single quote\', \\\"double quote\\\"<body>\\n" +' +
      '\n    "</html>\\n" +' +
      '\n    ""; ');
      cb();
    });

    stream.write(new gutil.File({
      path: join(__dirname, './test-template.html'),
      contents: fs.readFileSync(join(__dirname, './test-template.html'))
    }));

    stream.end();
  });

})();
