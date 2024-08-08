import React from 'react';


export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overrider){
        let text = "I am Emoji Parent Component.";
        if(overrider) text=overrider;
        return <div>{text}</div>
    }

}