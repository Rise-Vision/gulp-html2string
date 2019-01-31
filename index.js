(function (module) {

  'use strict';
  var map = require('map-stream');
  var compile = require('./lib/compile');

  module.exports = function(options) {
    return map(function(file, cb) {
      compile(file, options, function(err, data) {
        if (err) return cb(err);

        file.contents = new Buffer(data);

        cb(null, file);
      });
    });
  };


})(module);
