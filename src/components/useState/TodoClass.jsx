import React from "react";

export default class TodoClass extends React.Component {
    state = {
        input: '',
        message: ''
    }
    onChangeHandel = (e) =>{
        const val = e.target.value;
        const msg = val.includes('.js') ? 'File not support': 'Result-'+ val;

        this.setState({
            message:msg,
            input:val
        });
    }
    render(){
        const {message, input} = this.state;
        return (
            <>
                <input type="text" name="input" onChange={this.onChangeHandel} value={input} placeholder="input"/>
                <p>{message}</p>
            </>
        );
    }
}