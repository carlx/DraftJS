exports.id = 0;
exports.modules = {

/***/ "./src/Editor/BlockStyleControls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockStyleControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyleButton__ = __webpack_require__("./src/Editor/StyleButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/Editor/constants.js");
var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/BlockStyleControls.js';




var BlockStyleControls = function BlockStyleControls(props) {
    var editorState = props.editorState;

    var selection = editorState.getSelection();
    var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        },
        __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BLOCK_TYPES */].map(function (type) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyleButton__["a" /* default */], {
                key: type.label,
                active: type.style === blockType,
                label: type.label,
                onToggle: props.onToggle,
                style: type.style,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            });
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockStyleControls);

/***/ }),

/***/ "./src/Editor/BlockStyleFn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBlockStyle;
function getBlockStyle(block) {
    console.log(block.getType());
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        case 'super':
            return 'reTextCenter';
        default:
            return null;
    }
}

/***/ }),

/***/ "./src/Editor/InlineStyleControls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineStyleControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyleButton__ = __webpack_require__("./src/Editor/StyleButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/Editor/constants.js");
var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/InlineStyleControls.js';




var InlineStyleControls = function InlineStyleControls(props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* INLINE_STYLES */].map(function (type) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyleButton__["a" /* default */], {
                key: type.label,
                active: currentStyle.has(type.style),
                label: type.label,
                onToggle: props.onToggle,
                style: type.style,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            });
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (InlineStyleControls);

/***/ }),

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
      var TOHTML_OPTIONS = {};
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
            lineNumber: 73
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'RichEditor-root', __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BlockStyleControls__["a" /* default */], {
            editorState: this.state.editorState,
            onToggle: this.toggleBlockType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__InlineStyleControls__["a" /* default */], {
            editorState: this.state.editorState,
            onToggle: this.toggleInlineStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: className, onClick: this.focus, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
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
                lineNumber: 84
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          })
        )
      );
    }
  }]);

  return RichEditor;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

RichEditor.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (RichEditor);

/***/ }),

/***/ "./src/Editor/StyleButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyleButton */
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





var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/StyleButton.js';


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
                        lineNumber: 17
                    }
                },
                this.props.label
            );
        }
    }]);

    return StyleButton;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (StyleButton);

/***/ }),

/***/ "./src/Editor/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOCK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INLINE_STYLES; });
var BLOCK_TYPES = [{ label: 'Tytuł', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'CENTER', style: 'super' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }];

var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }, { label: 'Center', style: 'center' }];

/***/ }),

/***/ "./src/Home.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_svg__ = __webpack_require__("./src/react.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__react_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_module_css__ = __webpack_require__("./src/Home.module.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_module_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Home_module_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css__ = __webpack_require__("./src/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Editor_RichEditor__ = __webpack_require__("./src/Editor/RichEditor.js");





var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Home.js';






var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Home_module_css___default.a.home, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Editor_RichEditor__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        })
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./src/RichEditor.js":
false

};
//# sourceMappingURL=0.bbce39d27db71b76a0c5.hot-update.js.map