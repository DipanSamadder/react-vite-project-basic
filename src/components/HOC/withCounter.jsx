import React from "react";

const withCounter = (OrginalComponent)=> {
    class NewComponent extends React.Component{
        state = {
            counter: 0
        }
    
        handleClick = ()=>{
            this.setState((preState)=>({
                counter: preState.counter +1
            }));
        }

        render(){
            const {counter} = this.state;
            return <OrginalComponent counter={counter} incrementCount={this.handleClick}/>
        }
    }
    return NewComponent;

}

export default withCounter;
