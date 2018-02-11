import React, {Component} from 'react';
//import 'draft-js/dist/Draft.css';
import {Map} from 'immutable';
import Draft, {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, Modifier} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';
import {getBlockStyle} from './BlockStyleFn';
import {STATE, STYLE_MAP} from './constants';
import StyleButton from './StyleButton';


class RichEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createWithContent(convertFromRaw(STATE))};
    }

    focus = () => {
        this.refs.editor.focus();
    };

    fetch = () => {
        console.log(this.refs.editor.editor.innerHTML)
    }

    onChange = (editorState) => {
        this.setState({editorState});
    };


    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    };

    onTab = (e) => {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    };

    toggleBlockType = (blockType) => {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    };

    getRawContent = () => {
        const raw = convertToRaw(this.state.editorState.getCurrentContent());
        console.log(JSON.stringify(raw));
    }

    toggleInlineStyle = (inlineStyle) => {
        console.log(inlineStyle);
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    };

    insertText = () => {
        const selection = this.state.editorState.getSelection();
        console.log('selection', selection);
        const contentState = this.state.editorState.getCurrentContent();
        let ncs;
        if (selection.get('anchorOffset') === selection.get('focusOffset')) {
            ncs = Modifier.insertText(contentState, selection, "[znacznik]");
        } else {
            ncs = Modifier.replaceText(contentState, selection, "[znacznik]");
        }
        const es = EditorState.push(this.state.editorState, ncs, 'insert-fragment');
        this.setState({editorState: es});
    }

    undo = () => {
        const newState = EditorState.undo(this.state.editorState);
        this.setState({editorState: newState});
    }

    redo = () => {
        const newState = EditorState.redo(this.state.editorState);
        this.setState({editorState: newState});
    }

    render() {
        const TOHTML_OPTIONS = {
            // blockRenderers: {
            //     'center': (block) => {
            //         console.log(block);
            //         return null;
            //     },
            // },
            // defaultBlockTag: 'center',
            inlineStyles: {
                // Override default element (`strong`).
                BOLD: {element: 'strong'},
                ITALIC: {element: 'i'},
            },
        };

        const blockRenderMap = Map({
            'center': {
                element: 'center'
            },
            'header-one': {
                element: 'h3'
            }
        });
        const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);
        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = this.state.editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        console.log(convertToRaw(this.state.editorState.getCurrentContent()));
        //console.log(extendedBlockRenderMap);
        return (
            <div>
                <div className="RichEditor-root">
                    <BlockStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleBlockType}
                    />
                    <InlineStyleControls
                        editorState={this.state.editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                    <StyleButton onToggle={this.undo} icon="fa fa-undo"/>
                    <StyleButton onToggle={this.redo} icon="fa fa-redo-alt"/>
                    <div className={className} onClick={this.focus}>
                        <Editor
                            blockStyleFn={getBlockStyle}
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            onTab={this.onTab}
                            placeholder="Tell a story..."
                            ref="editor"
                            spellCheck={true}
                            blockRenderMap={extendedBlockRenderMap}
                            customStyleMap={STYLE_MAP}
                        />
                    </div>
                    <div>
                    </div>
                </div>
                {stateToHTML(this.state.editorState.getCurrentContent(), TOHTML_OPTIONS)}
                <div className="reTextCenter">
                    <button onClick={this.fetch}>html</button>
                    <button onClick={this.getRawContent}>html</button>
                    <button onClick={this.insertText}>insert</button>
                </div>
            </div>
        );
    }
}

RichEditor.propTypes = {};

export default RichEditor;
