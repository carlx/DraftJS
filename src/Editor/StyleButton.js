import React from 'react';
import { Button } from 'reactstrap';

export class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }
        return (
            <Button className={className} onMouseDown={this.onToggle}>
                <i className={this.props.icon}></i>{(this.props.icon) ? null : this.props.label}
            </Button>
        );
    }
}

export default StyleButton;