exports.id = 0;
exports.modules = {

/***/ "./src/RichEditor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable__ = __webpack_require__("immutable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_dist_Draft_css__ = __webpack_require__("./node_modules/draft-js/dist/Draft.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_dist_Draft_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_draft_js_dist_Draft_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_draft_js_export_html__ = __webpack_require__("draft-js-export-html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_draft_js_export_html__);





var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/RichEditor.js';








// Custom overrides for "code" style.
var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  },
  SUPER: {
    fontSize: 24,
    fontWeight: 'bold'
  }
};
function getBlockStyle(block) {
  console.log(block.getType());
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    case 'super':
      return 'nowy-styl';
    default:
      return null;
  }
}

var StyleButton = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(StyleButton, _React$Component);

  function StyleButton() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, StyleButton);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (StyleButton.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(StyleButton)).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        this.props.label
      );
    }
  }]);

  return StyleButton;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var BLOCK_TYPES = [{ label: 'Tytuł', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }, { label: 'Nowy blok', style: 'super' }];
var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    { className: 'RichEditor-controls', __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    },
    BLOCK_TYPES.map(function (type) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(StyleButton, {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      });
    })
  );
};
var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }];
var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    { className: 'RichEditor-controls', __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    },
    INLINE_STYLES.map(function (type) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(StyleButton, {
        key: type.label,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      });
    })
  );
};

function myBlockStyleFn(contentBlock) {
  console.log(contentBlock);
  var type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'nowy-styl';
  }
}

var RichEditor = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(RichEditor, _React$Component2);

  function RichEditor(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, RichEditor);

    var _this2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RichEditor.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(RichEditor)).call(this, props));

    _this2.state = { editorState: __WEBPACK_IMPORTED_MODULE_10_draft_js__["EditorState"].createEmpty() };
    _this2.focus = function () {
      return _this2.refs.editor.focus();
    };
    _this2.onChange = function (editorState) {
      _this2.setState({ editorState: editorState });
    };
    _this2.handleKeyCommand = _this2._handleKeyCommand.bind(_this2);
    _this2.onTab = _this2._onTab.bind(_this2);
    _this2.toggleBlockType = _this2._toggleBlockType.bind(_this2);
    _this2.toggleInlineStyle = _this2._toggleInlineStyle.bind(_this2);
    return _this2;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(RichEditor, [{
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command, editorState) {
      var newState = __WEBPACK_IMPORTED_MODULE_10_draft_js__["RichUtils"].handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(e) {
      var maxDepth = 4;
      this.onChange(__WEBPACK_IMPORTED_MODULE_10_draft_js__["RichUtils"].onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(__WEBPACK_IMPORTED_MODULE_10_draft_js__["RichUtils"].toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(__WEBPACK_IMPORTED_MODULE_10_draft_js__["RichUtils"].toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;
      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.

      var className = 'RichEditor-editor';
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'RichEditor-root', __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(BlockStyleControls, {
            editorState: editorState,
            onToggle: this.toggleBlockType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(InlineStyleControls, {
            editorState: editorState,
            onToggle: this.toggleInlineStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: className, onClick: this.focus, __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_draft_js__["Editor"], {
              blockStyleFn: getBlockStyle,
              customStyleMap: styleMap,
              editorState: editorState,
              handleKeyCommand: this.handleKeyCommand,
              onChange: this.onChange,
              onTab: this.onTab,
              placeholder: 'Tell a story...',
              ref: 'editor',
              spellCheck: true
              //blockStyleFn={myBlockStyleFn}
              , __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            }
          })
        ),
        Object(__WEBPACK_IMPORTED_MODULE_11_draft_js_export_html__["stateToHTML"])(this.state.editorState.getCurrentContent())
      );
    }
  }]);

  return RichEditor;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

RichEditor.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (RichEditor);

/***/ })

};
//# sourceMappingURL=0.b06ba23efd066f4dc1a4.hot-update.js.map