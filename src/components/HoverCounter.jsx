import React from "react";

export default class HoverCounter extends React.Component{
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
            <h1 onMouseOver={this.handelOnClick}>Click {counter} time</h1>
        );
    }
} 