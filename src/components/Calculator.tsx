import React from 'react'
import BowllingVerdrict from './BowllingVerdrict';
import TemparatureInput from './TemparatureInput';

import {convert, toFahrenheti, toCelsius} from '../lib/converter';


class Calculator extends React.Component {
    state = {
        temparature: 100,
        scale:'c'
    }

    handleChange =(e, scale) =>{
        this.setState({
            temparature:e.target.value,
            scale,
        });
    }

    render(){
        const {temparature, scale} = this.state;

        const celsius = scale ==='f' ? toCelsius(temparature, toFahrenheti) : temparature;
        const fahrenheit = scale ==='c' ? toCelsius(temparature, toCelsius) : temparature;
        return (
            <>
                <TemparatureInput scale="c" temparature={celsius} onChangeTemparature={this.handleChange}/>
                <TemparatureInput scale="f" temparature={fahrenheit} onChangeTemparature={this.handleChange}/>
                <BowllingVerdrict value={parseFloat(temparature)}/>
            </>
        );
    }
}

export default Calculator;