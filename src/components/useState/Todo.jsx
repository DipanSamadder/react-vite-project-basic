import { useState } from "react";

export default function Todo(){
    const [input, setInput] = useState({
        title:'',
        des:''
    });
    const {title, des}= input;
    return (
        <>
            <p>{title}</p>
            <input type="text" name="title" onChange={(e) => setInput({...input,title:e.target.value})} value={title} placeholder="title"/>
            <input type="text" name="des" onChange={(e) => setInput({...input,des:e.target.value})} value={des} placeholder="des"/>
            <p>{des}</p>
        </>
    );
}