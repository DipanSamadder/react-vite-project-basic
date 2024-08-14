import { useCallback, useEffect, useState } from "react";

export default function useWindowSize(size){
    const [onScreenSize, setOnScreenSize] = useState(true);
    
    const calculatesize = useCallback(() =>{
        setOnScreenSize(window.innerWidth <size);
    },[size]);
   

    useEffect(()=>{
        
        calculatesize();
        window.addEventListener('resize', calculatesize);

        return ()=>{
            window.removeEventListener('resize', calculatesize);
        }
    },[calculatesize]);

    return onScreenSize;
}