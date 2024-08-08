export function toCelsius(temp){
    return ((temp-32) * 5) / 9;
}


export function toFahrenheti(temp){
    return (temp*9)/5 + 32;
}


export function convert(temp, convertTo){
    const input = parseFloat(temp);
    if(Number.isNaN(temp)){
        return '';
    }

    const output = convertTo(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}