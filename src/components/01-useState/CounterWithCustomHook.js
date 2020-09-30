import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset} = useCounter(10);

    return (
        <>
         <h1>Counter with Hook {state}</h1>
         <hr />
         <button className="btn btn-danger mx-3" onClick={()=>decrement(2)}>-</button>
         <button className="btn btn-secondary mx-3" onClick={()=>reset()}>reset</button>
         <button className="btn btn-primary mx-3" onClick={()=>increment(2)}>+</button>
        </>
    )
}
