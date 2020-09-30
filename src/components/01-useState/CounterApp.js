import React,{useState} from 'react'
import './counter.css';
export const CounterApp = () => {
    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
        counter5:50,
        counter6:60,
    });
    const {counter1,counter2,counter3,counter4,counter5,counter6} = state;
    return (
        <>
        <div className="row">
            <div className="col-md-2">
                <h3>Counter1 {counter1}</h3>
            </div>
            <div className="col-md-2">
                <h3>Counter2 {counter2}</h3>
            </div>
            <div className="col-md-2">
                <h3>Counter3 {counter3}</h3>
            </div>
            <div className="col-md-2">
                <h3>Counter4 {counter4}</h3>
            </div>
            <div className="col-md-2">
                <h3>Counter5 {counter5}</h3>
            </div>
            <div className="col-md-2">
                <h3>Counter6 {counter6}</h3>
            </div>
        </div>
         <hr />
         <button 
            className="btn btn-primary"
            // onClick={()=>{
            //     setCounter({
            //         counter1:counter1+1,
            //         counter2:counter2,
            //     });
            // }}
            onClick={()=>{
                setState({
                    ...state,counter1:counter1+1
                });
            }}
        >
            +1
         </button>
        </>
    )
}
