"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _core = require("@chakra-ui/core");

var _router = require("next/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-repeat: no-repeat; \n  background-position: center center;\n  background-attachment: fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLayoutThemeBg = (0, _styled["default"])(_core.Box)(_templateObject());

var LayoutThemeBg = function LayoutThemeBg(_ref) {
  var _content$pages$page;

  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useRouter = (0, _router.useRouter)(),
      route = _useRouter.route;

  var _useTheme = (0, _core.useTheme)(),
      name = _useTheme.name,
      content = _useTheme.content;

  var page = route.replace('/', '');
  var background = ((_content$pages$page = content.pages[page]) === null || _content$pages$page === void 0 ? void 0 : _content$pages$page.backgroundImage) || content.backgroundImage || '';
  background = background.replace(/(\.[\w\d_-]+)$/i, '-blurred$1');
  return /*#__PURE__*/_react["default"].createElement(StyledLayoutThemeBg, _extends({}, props, {
    style: {
      backgroundImage: "url(/themes/".concat(name, "/").concat(background, ")")
    }
  }), children);
};

var _default = LayoutThemeBg;
exports["default"] = _default;
//# sourceMappingURL=LayoutThemeBg.js.map