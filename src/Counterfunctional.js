import React,{useState} from 'react'
function Counterfunction(){
    const [count,setCount]=useState(0);

    function increamentCounter() {
        setCount(count+1);
    }
   function decrementConter(amount = 1) {
        if (count > 0)
        setCount(count - amount);

    }
    
    return (
            <div>
                <h2 >Function Component</h2>
                <div>{count}</div>
                {/* Example: Pass a value to decrementConter */}
                <p><button style={{ marginRight: "10px" }} onClick={() => decrementConter()}>-</button><button onClick={increamentCounter}>+</button></p>
            </div>
        )
}
export default Counterfunction