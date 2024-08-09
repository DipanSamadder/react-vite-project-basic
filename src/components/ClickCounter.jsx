import React from "react";

export default class ClickCounter extends React.Component{
    state ={
        counter: 0
    }

    handelOnClick = ()=>{
        this.setState(
           (preState) => ({
            counter:preState.counter +1,
           })
        );
    }
    render(){
        const {counter} = this.state;
        return (
            <div><button onClick={this.handelOnClick}>Click {counter} time</button></div>
        );
    }
} 