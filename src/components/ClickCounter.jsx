export default function ClickCounter({handelOnClick, counter}){
    return (
        <div><button onClick={handelOnClick}>Click {counter} time</button></div>
    ); 
} 