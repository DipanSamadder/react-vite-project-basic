import React from "react";
function Counter({counter, title}){ console.log(`Counter ${title}`);
    
    return (<><p>{title} of {counter}</p></>);
}

export default React.memo(Counter);