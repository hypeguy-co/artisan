"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _themes = require("../themes");

var _SvgIcons = require("./SvgIcons");

var _Box = require("../Box");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BaseElement = function BaseElement(_ref) {
  var base = _ref.base,
      baseSize = _ref.baseSize,
      props = _objectWithoutProperties(_ref, ["base", "baseSize"]);

  var theme = (0, _themes.useTheme)();
  var compProps = {
    general: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: -1
    },
    circle: {
      borderRadius: '100%'
    },
    square: {
      borderRadius: '10px'
    },
    rectangle: {
      borderRadius: '10px'
    },
    hexagon: {
      fill: 'rgba(0,0,0,0.3)',
      stroke: theme.border.color,
      'stroke-width': '0.4'
    },
    shield: {
      fill: 'rgba(0,0,0,0.3)',
      stroke: theme.border.color,
      'stroke-width': '0.4'
    }
  };

  if (base === 'circle' || base === 'square' || base === 'rectangle') {
    return /*#__PURE__*/_react["default"].createElement(_Box.BoxStructure, _extends({
      depthContent: true,
      borderColorized: true
    }, compProps.general, compProps[base], props));
  }

  if (base === 'shield') {
    return /*#__PURE__*/_react["default"].createElement(_SvgIcons.Shield // viewBox="0 0 24 24"
    // style={{...compProps.general, ...compProps[base]}}
    , null);
  }

  return /*#__PURE__*/_react["default"].createElement(_SvgIcons.Hexagon // viewBox="0 0 24 24"
  // style={{...compProps.general, ...compProps[base]}}
  , null);
};

;
var IconBadgeStyled = (0, _themes.styled)(_Box.Box)(_templateObject());

var IconBadge = function IconBadge(_ref2) {
  var children = _ref2.children,
      base = _ref2.base,
      icon = _ref2.icon,
      label = _ref2.label,
      extra = _ref2.extra,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? '5em' : _ref2$size,
      props = _objectWithoutProperties(_ref2, ["children", "base", "icon", "label", "extra", "size"]);

  var height = size;
  var width = size;

  if (base === "rectangle") {
    width = '100%';
  }

  var fontSize = '24px';
  return /*#__PURE__*/_react["default"].createElement(IconBadgeStyled, {
    my: "20px",
    mx: "5px",
    width: width,
    height: height
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    fontSize: fontSize,
    height: "100%",
    display: 'flex'
  }, props), /*#__PURE__*/_react["default"].createElement(BaseElement, {
    base: base,
    baseSize: size
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    m: 'auto'
  }, children)), (extra || label) && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    position: "absolute",
    bottom: "-22px",
    left: "0",
    right: "0",
    textAlign: "center",
    height: "30px"
  }, extra && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "#191817",
    borderRadius: "10px",
    marginBottom: "-10px",
    border: "1px solid #ddae5d",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "calc(100% - 20px)"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    fontSize: "10px"
  }, extra)), label && /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    colorized: true,
    textTransform: "uppercase",
    lineHeight: "1em",
    fontSize: "0.8em",
    marginTop: "17px"
  }, label)));
};

IconBadge.defaultProps = {
  base: 'circle'
};
var _default = IconBadge;
exports["default"] = _default;
//# sourceMappingURL=IconBadge.js.map