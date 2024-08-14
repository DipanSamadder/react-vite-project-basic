import React from "react";

function Button({handelClick, children}){
    console.log(`Button ${children}`);
    
    return (
        <>
            <p>Button</p>
            <button onClick={handelClick}>{ children }</button>
        </>
    );
}

export default React.memo(Button);