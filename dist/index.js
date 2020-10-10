'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@chakra-ui/core');
var styled = require('@emotion/styled');
require('react-truncate');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  color: ", ";\n  text-shadow: ", ";\n\n  .title {\n    background: rgba(0, 0, 0, 0.9);\n    text-align: center;\n    position: absolute;\n    padding: 5px;\n    bottom: 0px;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBox = styled__default['default'](core.Box)(_templateObject(), function (props) {
  return props.theme.text.colorBase;
}, function (props) {
  return props.theme.text.shadow;
});

var Banner = function Banner(_ref) {
  var src = _ref.src,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["src", "title"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledBox, props, /*#__PURE__*/React__default['default'].createElement(core.Image, {
    src: src
  }), /*#__PURE__*/React__default['default'].createElement(core.Box, {
    className: "title"
  }, title));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var isHex = function isHex(h) {
  if (typeof h !== 'string') return false;
  h = h.replace('#', '');
  var a = parseInt(h, 16);
  return a.toString(16) === h.toLowerCase();
};

// interface TextProps extends  {
// };
var StyledText = styled__default['default'](core.Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  text-shadow: ", ";\n"], ["\n  ",
    "\n\n  text-shadow: ", ";\n"])), function (props) { return (props.colorized && ("color: " + props.colorized + ";")); }, function (props) { return props.theme.text.shadow; });
var Text = function (_a) {
    var children = _a.children, colorized = _a.colorized, props = __rest(_a, ["children", "colorized"]);
    var theme = core.useTheme();
    var componentColor = (colorized && isHex(colorized)) ? colorized : theme.colors.colorBase;
    // In case that colors is only a boolean
    if (typeof colorized === 'boolean') {
        componentColor = theme.colors.primary[500];
    }
    return (React__default['default'].createElement(StyledText, __assign({ colorized: componentColor }, props), children));
};
var templateObject_1;

// import { ChakraProvider } from '@chakra-ui/core';
// const Banner = ({children}) => <Banner>{children}</Banner>

console.info(Text);

var Test = function Test() {
  return /*#__PURE__*/React__default['default'].createElement("div", null, "Test");
};

Object.defineProperty(exports, 'ChakraProvider', {
  enumerable: true,
  get: function () {
    return core.ChakraProvider;
  }
});
exports.Banner = Banner;
exports.Test = Test;
exports.Text = Text;
