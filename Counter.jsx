import React, {useState} from "react"
function Counter(){
    const [count, setCount] = useState(0);
    const [increaseCount, setIncreaseCount] = useState(1);
    function increment(){
        setCount(count + increaseCount);
    }
    function decrement(){
        setCount(count - increaseCount);
    }
    function countIncrease(){
        setIncreaseCount(increaseCount + 1);
    }
    function countDecrease(){
        setIncreaseCount(increaseCount - 1)
    }
    return (<div>
        <h1>Count is: {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

        <h2>Count increase by: {increaseCount}</h2>
        <button onClick={countIncrease}>increaseCount</button>
        <button onClick={countDecrease}>decreaseCount</button>
        </div>);
}

export default Counter;