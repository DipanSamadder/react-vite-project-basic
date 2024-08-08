import React from 'react'
const typeStage = {
    c:'celsius',
    f: 'Fahrenheit'
}

function TemparatureInput({temparature, scale, onChangeTemparature}) {

        return (
            <>
                <fieldset>
                    <legend>Input Value {typeStage[scale]}</legend>
                    <input type="text" value={temparature} onChange={(e) => onChangeTemparature(e, scale)}/>
                </fieldset>
            </>
        );
    
}

export default TemparatureInput;