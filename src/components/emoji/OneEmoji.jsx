import React, { Component } from 'react';
import { Emoji } from 'emoji-mart'
class OneEmoji extends Component {
    render() {
        return (
            <Emoji
                set={'apple'}
                emoji={'grinning'}
                size={26}
                fallback={(emoji, props) => {
                    return emoji ? `:${emoji.short_names[0]}:` : props.emoji
                }}
            />
        );
    }
}


export default OneEmoji;