"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Image = require("../Image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  color: ", ";\n  text-shadow: ", ";\n\n  .title {\n    background: rgba(0, 0, 0, 0.9);\n    text-align: center;\n    position: absolute;\n    padding: 5px;\n    bottom: 0px;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = (0, _styled["default"])(_core.Box)(_templateObject(), function (props) {
  return props.theme.text.colorBase;
}, function (props) {
  return props.theme.text.shadow;
});

var Banner = function Banner(_ref) {
  var src = _ref.src,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["src", "title"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBox, props, /*#__PURE__*/_react["default"].createElement(_Image.Image, {
    src: src
  }), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: "title"
  }, title));
};

var _default = Banner;
exports["default"] = _default;
//# sourceMappingURL=Banner.js.map