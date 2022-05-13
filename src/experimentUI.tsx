import { useState } from "react"

//react functional component

// Inputbox enter numbers 1 at a time

// Display the list of the numbers entered so far

// Display basic statistics. 
// Mean and range

export default function UserExperiment(){
    const [numbers, setNumbers] = useState<number[]>([])
    const [current_number, setCurrentNumber] = useState<number>(0)
    let sum = 0;
    let mean = 0;
    let max:any;
    let min:any;
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        setNumbers([...numbers, current_number])
    }  
    const handleChange = (e:any) =>{

        setCurrentNumber(e.target.value)
    }
    sum += current_number
    mean = sum/numbers.length
    max = Math.max(...numbers)
    min = Math.min(...numbers)
    return(
        <>
        <form onSubmit={handleSubmit}>
            Enter the number from 1 to 10:
            <input name="numbers" value={current_number} onChange={handleChange}></input>
            <button >Show the results</button>
        </form>
        <p>List of the numbers: {numbers.join(",")}</p>
        <p>Mean of the numebrs: {mean.toFixed(2)}</p>
        <p>The Range of the numbers: {min}:{max}</p>
        </>
    )
}
