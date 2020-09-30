import React,{useState} from 'react';
export const useCounter = function(valor){
    const [state, setstate] = useState(valor);
    
    const increment = (factor=1)=>{
        setstate(state+factor);
    }

    const decrement = (factor=1)=>{
        setstate(state-factor);
    }

    const reset = ()=>{
        setstate(valor);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}