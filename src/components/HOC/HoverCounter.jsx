import withCounter from "./HOC/withCounter";


const HoverCounter = (props)=> {
    const {counter, incrementCount} = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Click {counter} time</h1>
        </div>
    );
}

export default withCounter(HoverCounter);