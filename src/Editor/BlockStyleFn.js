export function getBlockStyle(block) {
    console.log(block.getType());
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        case 'center': return 'reTextCenter';
        case 'left': return 'reTextLeft';
        case 'right': return 'reTextRight';
        case 'justify': return 'reTextJustify';
        default: return null;
    }
}