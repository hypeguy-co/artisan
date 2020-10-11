"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslateString = exports.useTranslate = exports.useTranslateContext = void 0;

var _react = require("react");

var _ContextTranslate = _interopRequireDefault(require("./ContextTranslate"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTranslateContext = function useTranslateContext() {
  var ctx = (0, _react.useContext)(_ContextTranslate["default"]);

  if (process.env.NODE_ENV !== 'production' && !ctx) {
    throw new Error('could not find context value; please ensure the component is wrapped in a <Provider>');
  }

  return ctx;
};

exports.useTranslateContext = useTranslateContext;

var useTranslate = function useTranslate() {
  var _useTranslateContext = useTranslateContext(),
      state = _useTranslateContext.state,
      updateLanguage = _useTranslateContext.updateLanguage;

  return [state.language, updateLanguage];
};

exports.useTranslate = useTranslate;

var useTranslateString = function useTranslateString(label, data, language, module) {
  var _useTranslateContext2 = useTranslateContext(),
      state = _useTranslateContext2.state,
      addSupportedModule = _useTranslateContext2.addSupportedModule;

  var mod = module || state.defaultModule || 'general';
  var lang = language || state.language;
  var resources = state.resources;
  var keys = null;
  (0, _react.useEffect)(function () {
    if (!resources[lang] || !resources[lang][mod]) {
      addSupportedModule(lang, mod);
    }
  }, [addSupportedModule, lang, mod, resources]);

  if (resources[lang] && resources[lang][mod]) {
    keys = resources[lang][mod];
  }

  if (!label) {
    return null;
  }

  var text = (0, _utils.ResolveKeyMemoized)(label, keys);

  if (!text) {
    return label;
  }

  if (data) {
    text = (0, _utils.replaceData)(text, data);
  }

  if ((0, _utils.checkMarkdownMarkup)(text)) {
    text = (0, _utils.renderFormatedString)(text);
  }

  return text;
};

exports.useTranslateString = useTranslateString;
//# sourceMappingURL=hooks.js.map