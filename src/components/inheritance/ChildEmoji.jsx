import Emoji from "./Emoji";

export default class ChildEmoji extends Emoji{
    constructor({props}){
        super(props);
    }
    render(){
        const finalText = this.addEmoji("I am child", "EMOJIIII");
        return super.render(finalText);
    }
}