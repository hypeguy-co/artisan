"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

var _themes = require("../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: black;\n  border: 1px solid ", ";\n\n  & .tippy-arrow {\n    color: black;\n  }\n\n  & .tippy-svg-arrow svg{\n    fill:yellow;\n  }\n  & .tippy-svg-arrow svg + svg { \n    fill: black;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SVGArrow = '<svg width="16"height="6"xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"/></svg>';
;
var StyledTooltip = (0, _themes.styled)(_react2["default"])(_templateObject(), function (props) {
  return props.theme.border.color;
});

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content;
  return /*#__PURE__*/_react["default"].createElement(StyledTooltip, {
    arrow: SVGArrow + SVGArrow,
    offset: [0, 20],
    content: content
  }, children);
};

var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=Tooltip.js.map