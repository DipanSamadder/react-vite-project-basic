import React from "react";

function Title(){ 
    console.log('title');
    
    return (<><p>Title component</p></>);
}



export default React.memo(Title);