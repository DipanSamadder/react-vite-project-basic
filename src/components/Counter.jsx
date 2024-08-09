import React from "react";

export default class Counter extends React.Component {
    state ={
        count: 0
    }

    handelClick = ()=>{
        this.setState((pre) => ({count:pre.count+1}));
    }


    render(){
        const {children} = this.props;
        const {count} = this.state;
        return children(count, this.handelClick);
    }
}