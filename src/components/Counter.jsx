import React, { useState } from 'react';

const Counter = () => {
    const [count , setCount]=useState(0)

    function increment() {
        setCount(count+1)
    }
    function decrement() {
        setCount(count-1)
        
    }
    return (
        <div>
            <p>valeur courante: {count} </p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
