import React from 'react';


export default class Braket extends React.Component{

    addBraket = (text) => `[ ${text} ]`; 
    render() {
        return this.props.children({addBraket: this.addBraket});
    }
}