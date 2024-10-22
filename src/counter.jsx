import { useState } from "react"

export default  function Counter(){
    const [count , SetCount] = useState(0)
    
    const handleAdd = () => {
        const newCount = count + 1; 
        SetCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count -1;
        SetCount(newCount);
    } 

    return (
        <div style={{
            border:'2px solid tomato',
            margin: '20px'
        }}>
            <h2>Counter : {count} </h2>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}