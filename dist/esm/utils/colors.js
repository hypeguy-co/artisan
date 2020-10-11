"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgbA = exports.isHex = void 0;

var isHex = function isHex(h) {
  if (typeof h !== 'string') return false;
  h = h.replace('#', '');
  var a = parseInt(h, 16);
  return a.toString(16) === h.toLowerCase();
};

exports.isHex = isHex;

var hexToRgbA = function hexToRgbA(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = '0x' + c.join('');
    return "rgba(".concat([c >> 16 & 255, c >> 8 & 255, c & 255].join(','), ",").concat(opacity, ")");
  }

  throw new Error('Bad Hex');
};

exports.hexToRgbA = hexToRgbA;
//# sourceMappingURL=colors.js.map