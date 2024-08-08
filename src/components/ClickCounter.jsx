import withCounter from "./HOC/withCounter";


const ClickCounter = (props)=> {
    const {counter, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}>Click {counter} time</button>
        </div>
    );
}

export default withCounter(ClickCounter);