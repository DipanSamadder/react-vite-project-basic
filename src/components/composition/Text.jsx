export default function Text({addEmoji, addBraket}) {
    let text = "I am a Text Composition.";
    if(addEmoji){
        text = addEmoji('Text addEmoji', 'Emoji');
    }
    if(addBraket){
        text = addBraket('Text addBraket');
    }
    return <div>{text}</div>;
}