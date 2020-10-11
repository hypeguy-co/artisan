"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = exports.notEmpty = void 0;

var _object = require("utils/object");

/* eslint-disable */
var notEmpty = function notEmpty(value) {
  return (!Boolean(value) || (0, _object.isEmpty)(value)) && 'not_empty';
}; // Synchronous validation function


exports.notEmpty = notEmpty;

var email = function email(value) {
  var validatedData = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  return validatedData && 'invalidEmail';
}; // Async validation function


exports.email = email;

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var validateAsync = function validateAsync(value) {
  return sleep(2000).then(function () {
    if (['admin', 'null', 'god'].includes(value)) {
      throw 'Nice try';
    }
  });
};
//# sourceMappingURL=validate.js.map