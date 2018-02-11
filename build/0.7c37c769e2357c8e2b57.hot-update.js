exports.id = 0;
exports.modules = {

/***/ "./src/Editor/RichEditor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__("immutable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_export_html__ = __webpack_require__("draft-js-export-html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__InlineStyleControls__ = __webpack_require__("./src/Editor/InlineStyleControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__BlockStyleControls__ = __webpack_require__("./src/Editor/BlockStyleControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__BlockStyleFn__ = __webpack_require__("./src/Editor/BlockStyleFn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants__ = __webpack_require__("./src/Editor/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__StyleButton__ = __webpack_require__("./src/Editor/StyleButton.js");






var _jsxFileName = '/Users/kwawrzecki/Documents/DraftJS/src/Editor/RichEditor.js';

//import 'draft-js/dist/Draft.css';









var RichEditor = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(RichEditor, _React$Component);

    function RichEditor(props) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, RichEditor);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RichEditor.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(RichEditor)).call(this, props));

        _this.focus = function () {
            _this.refs.editor.focus();
        };

        _this.fetch = function () {
            console.log(_this.refs.editor.editor.innerHTML);
        };

        _this.onChange = function (editorState) {
            _this.setState({ editorState: editorState });
        };

        _this.handleKeyCommand = function (command, editorState) {
            var newState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["RichUtils"].handleKeyCommand(editorState, command);
            if (newState) {
                _this.onChange(newState);
                return true;
            }
            return false;
        };

        _this.onTab = function (e) {
            var maxDepth = 4;
            _this.onChange(__WEBPACK_IMPORTED_MODULE_8_draft_js__["RichUtils"].onTab(e, _this.state.editorState, maxDepth));
        };

        _this.toggleBlockType = function (blockType) {
            _this.onChange(__WEBPACK_IMPORTED_MODULE_8_draft_js__["RichUtils"].toggleBlockType(_this.state.editorState, blockType));
        };

        _this.getRawContent = function () {
            var raw = Object(__WEBPACK_IMPORTED_MODULE_8_draft_js__["convertToRaw"])(_this.state.editorState.getCurrentContent());
            console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(raw));
        };

        _this.toggleInlineStyle = function (inlineStyle) {
            console.log(inlineStyle);
            _this.onChange(__WEBPACK_IMPORTED_MODULE_8_draft_js__["RichUtils"].toggleInlineStyle(_this.state.editorState, inlineStyle));
        };

        _this.insertText = function () {
            var selection = _this.state.editorState.getSelection();
            console.log('selection', selection);
            var contentState = _this.state.editorState.getCurrentContent();
            var ncs = void 0;
            if (selection.get('anchorOffset') === selection.get('focusOffset')) {
                ncs = __WEBPACK_IMPORTED_MODULE_8_draft_js__["Modifier"].insertText(contentState, selection, "[znacznik]");
            } else {
                ncs = __WEBPACK_IMPORTED_MODULE_8_draft_js__["Modifier"].replaceText(contentState, selection, "[znacznik]");
            }
            var es = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].push(_this.state.editorState, ncs, 'insert-fragment');
            _this.setState({ editorState: es });
        };

        _this.undo = function () {
            var newState = __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].undo(_this.state.editorState);
            _this.setState({ editorState: newState });
        };

        _this.state = { editorState: __WEBPACK_IMPORTED_MODULE_8_draft_js__["EditorState"].createWithContent(Object(__WEBPACK_IMPORTED_MODULE_8_draft_js__["convertFromRaw"])(__WEBPACK_IMPORTED_MODULE_13__constants__["c" /* STATE */])) };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(RichEditor, [{
        key: 'render',
        value: function render() {
            var TOHTML_OPTIONS = {
                // blockRenderers: {
                //     'center': (block) => {
                //         console.log(block);
                //         return null;
                //     },
                // },
                // defaultBlockTag: 'center',
                inlineStyles: {
                    // Override default element (`strong`).
                    BOLD: { element: 'strong' },
                    ITALIC: { element: 'i' }
                }
            };

            var blockRenderMap = Object(__WEBPACK_IMPORTED_MODULE_7_immutable__["Map"])({
                'center': {
                    element: 'center'
                },
                'header-one': {
                    element: 'h3'
                }
            });
            var extendedBlockRenderMap = __WEBPACK_IMPORTED_MODULE_8_draft_js___default.a.DefaultDraftBlockRenderMap.merge(blockRenderMap);
            // If the user changes block type before entering any text, we can
            // either style the placeholder or hide it. Let's just hide it now.
            var className = 'RichEditor-editor';
            var contentState = this.state.editorState.getCurrentContent();
            if (!contentState.hasText()) {
                if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                    className += ' RichEditor-hidePlaceholder';
                }
            }
            console.log(Object(__WEBPACK_IMPORTED_MODULE_8_draft_js__["convertToRaw"])(this.state.editorState.getCurrentContent()));
            //console.log(extendedBlockRenderMap);
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127
                    }
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: 'RichEditor-root', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__BlockStyleControls__["a" /* default */], {
                        editorState: this.state.editorState,
                        onToggle: this.toggleBlockType,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__InlineStyleControls__["a" /* default */], {
                        editorState: this.state.editorState,
                        onToggle: this.toggleInlineStyle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 133
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__StyleButton__["a" /* default */], { onToggle: this.undo, icon: 'fa fa-undo', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'div',
                        { className: className, onClick: this.focus, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 138
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_draft_js__["Editor"], {
                            blockStyleFn: __WEBPACK_IMPORTED_MODULE_12__BlockStyleFn__["a" /* getBlockStyle */],
                            editorState: this.state.editorState,
                            handleKeyCommand: this.handleKeyCommand,
                            onChange: this.onChange,
                            onTab: this.onTab,
                            placeholder: 'Tell a story...',
                            ref: 'editor',
                            spellCheck: true,
                            blockRenderMap: extendedBlockRenderMap,
                            customStyleMap: __WEBPACK_IMPORTED_MODULE_13__constants__["d" /* STYLE_MAP */],
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 152
                        }
                    })
                ),
                Object(__WEBPACK_IMPORTED_MODULE_9_draft_js_export_html__["stateToHTML"])(this.state.editorState.getCurrentContent(), TOHTML_OPTIONS),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: 'reTextCenter', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 156
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'button',
                        { onClick: this.fetch, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 157
                            }
                        },
                        'html'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'button',
                        { onClick: this.getRawContent, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 158
                            }
                        },
                        'html'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'button',
                        { onClick: this.insertText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 159
                            }
                        },
                        'insert'
                    )
                )
            );
        }
    }]);

    return RichEditor;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

RichEditor.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (RichEditor);

/***/ })

};
//# sourceMappingURL=0.7c37c769e2357c8e2b57.hot-update.js.map