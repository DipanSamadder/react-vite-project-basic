export default function BowllingVerdrict({value}){
    if(value >= 100){
        return <p>The water would boil.</p>
    }
    return <p>Water would not boil.</p>
}