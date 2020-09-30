import React, { useState, useEffect } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:``,
        email:``
    });
    const {name,email} = formState;

    useEffect(()=>{
        console.log(`Hey!`);
    },[]);

    useEffect(()=>{ //Es un Listener que espera los cambios de components, objetos y variables
        // console.log(`Email cambió`);
    },[email]);

    const handleInputChange = ({target})=>{
        setformState({
            ...formState,
            [target.name]:target.value
        });
    }
    return (
        <>
         <h1>useEffect</h1>
         <hr />
        <form className="row">
            <div className="col-md-3">
                <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
                <input 
                type="email" 
                name="email" 
                className="form-control" 
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange} />
            </div>
            <div className="col-md-12">
                {(name==='123') && <Message />}
            </div> 
        </form>
        </>
    )
}
