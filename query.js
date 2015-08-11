'use strict';

var checkLocation = function() {
  return typeof window !== 'undefined' ? "You're in the browser!" : "You're in Node!";
}

exports.checkLocation = checkLocation;
