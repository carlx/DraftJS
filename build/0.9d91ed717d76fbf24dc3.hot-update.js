exports.id = 0;
exports.modules = {

/***/ "./src/Editor/RichEditor.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_draft_js_dist_Draft_css__ = __webpack_require__("./node_modules/draft-js/dist/Draft.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_draft_js_dist_Draft_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_draft_js_dist_Draft_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js_export_html__ = __webpack_require__("draft-js-export-html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InlineStyleControls__ = __webpack_require__("./src/Editor/InlineStyleControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BlockStyleControls__ = __webpack_require__("./src/Editor/BlockStyleControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__BlockStyleFn__ = __webpack_require__("./src/Editor/BlockStyleFn.js");





var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/RichEditor.js';








var RichEditor = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(RichEditor, _React$Component);

  function RichEditor(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, RichEditor);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RichEditor.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(RichEditor)).call(this, props));

    _this.focus = function () {
      _this.refs.editor.focus();
    };

    _this.onChange = function (editorState) {
      _this.setState({ editorState: editorState });
    };

    _this.handleKeyCommand = function (command, editorState) {
      var newState = __WEBPACK_IMPORTED_MODULE_7_draft_js__["RichUtils"].handleKeyCommand(editorState, command);
      if (newState) {
        _this.onChange(newState);
        return true;
      }
      return false;
    };

    _this.onTab = function (e) {
      var maxDepth = 4;
      _this.onChange(__WEBPACK_IMPORTED_MODULE_7_draft_js__["RichUtils"].onTab(e, _this.state.editorState, maxDepth));
    };

    _this.toggleBlockType = function (blockType) {
      _this.onChange(__WEBPACK_IMPORTED_MODULE_7_draft_js__["RichUtils"].toggleBlockType(_this.state.editorState, blockType));
    };

    _this.toggleInlineStyle = function (inlineStyle) {
      _this.onChange(__WEBPACK_IMPORTED_MODULE_7_draft_js__["RichUtils"].toggleInlineStyle(_this.state.editorState, inlineStyle));
    };

    _this.state = { editorState: __WEBPACK_IMPORTED_MODULE_7_draft_js__["EditorState"].createEmpty() };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(RichEditor, [{
    key: 'render',
    value: function render() {
      var TOHTML_OPTIONS = {
        blockRenderers: {
          atomic: function atomic(block) {
            var data = block.getData();
            console.log(data);
            if (data.get('foo') === 'bar') {
              return '<div>' + escape(block.getText()) + '</div>';
            }
          }
        }
      };
      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.
      var className = 'RichEditor-editor';
      var contentState = this.state.editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }
      console.log(Object(__WEBPACK_IMPORTED_MODULE_7_draft_js__["convertToRaw"])(this.state.editorState.getCurrentContent()));
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'RichEditor-root', __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BlockStyleControls__["a" /* default */], {
            editorState: this.state.editorState,
            onToggle: this.toggleBlockType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__InlineStyleControls__["a" /* default */], {
            editorState: this.state.editorState,
            onToggle: this.toggleInlineStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: className, onClick: this.focus, __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_draft_js__["Editor"], {
              blockStyleFn: __WEBPACK_IMPORTED_MODULE_11__BlockStyleFn__["a" /* getBlockStyle */],
              editorState: this.state.editorState,
              handleKeyCommand: this.handleKeyCommand,
              onChange: this.onChange,
              onTab: this.onTab,
              placeholder: 'Tell a story...',
              ref: 'editor',
              spellCheck: true
              //blockStyleFn={myBlockStyleFn}
              , __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          })
        ),
        Object(__WEBPACK_IMPORTED_MODULE_8_draft_js_export_html__["stateToHTML"])(this.state.editorState.getCurrentContent(), TOHTML_OPTIONS),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'reTextCenter', __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          'Hello'
        )
      );
    }
  }]);

  return RichEditor;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

RichEditor.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (RichEditor);

/***/ })

};
//# sourceMappingURL=0.9d91ed717d76fbf24dc3.hot-update.js.map