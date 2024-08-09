import { useEffect, useState } from "react";

export default function ClockClass(){
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count} time`;
        console.log('use effect count');
        
    },[count]);

    useEffect(() => {
        console.log('use effect trick');
        const interval = setInterval(trick,1000);

        return () => {
            console.log('component Unmount');
            clearInterval(interval);
        }
    },[]);
    
   const trick = () => {
    console.log('use effect trick ---');
    setDate(new Date());
    }

   const handelCount = () =>{
        setCount((count) => count+1);
    }


    return (
        <>  
                <p>Clock- { date.toLocaleTimeString() }</p>
            <button onClick={handelCount}>Click Clock - {count}</button>
        </>
    );
    
}
