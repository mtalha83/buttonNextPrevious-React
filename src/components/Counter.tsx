import { useState } from "react"

const Counter = ()=>{

    
  const [counter, setCounter] = useState(10)

  const handleIncrement = ()=>{
    setCounter(counter+1)
  }

  const handleDecrement = ()=>{
    setCounter(counter-1)
  }


    return(
        <div>
        <span className="count">{counter}</span>
        <div>
            {/* <button onClick={()=> setCounter(counter+1)}>increment</button>
            <button onClick={()=> setCounter(counter-1)}>decrement</button> */}
            <button onClick={handleIncrement} >increment</button>
            <button onClick={handleDecrement} disabled={!counter}>decrement</button>
        </div>
        </div>
    )
}

export default Counter