import Clock from './Clock';

function ClockList({quantities = []}){
    return(
        <>
            {quantities.map((key)=>
                <Clock key={key}/>
            )}
        </>
    );
}

export default ClockList;