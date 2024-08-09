import React from "react";

export default class ClockClass extends React.Component{
    state = {
        count:0,
        date: new Date()
    }
    componentDidMount() {
       const {count} =  this.state;
       document.title = `Click ${count} button`;
       setInterval(this.trick, 1000);
    }
    componentDidUpdate() {
        const {count} =  this.state;
        document.title = `Click ${count} button`;
    }
   trick = () => {
        this.setState({date: new Date()});
    }

    handelCount = () =>{
        this.setState(({count}) => ({count:count+1}));
    }
    render(){
        const {date, count} = this.state;
        return (
            <>  
                    <p>Clock- { date.toLocaleTimeString() }</p>
                <button onClick={this.handelCount}>Click Clock - {count}</button>
            </>
        );
    }
}
