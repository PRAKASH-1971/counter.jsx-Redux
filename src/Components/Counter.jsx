import { useState } from 'react';
import { store } from '../Redux/store';
import {handleDecrement,handleIncrement} from "../Redux/action"
import {useSelector,useDispatch} from "react-redux"


function Counter() {
  // const [counter,setCounter] = useState(0)
  const [local,setLocal] = useState(0)
//   const {counter} = store.getState()
  // const {dispatch} = store;
  const counter = useSelector((store)=> store.counter)
  const dispatch = useDispatch();


  store.subscribe(()=>{  // whenever store changes it rerenders
    setLocal((prev)=>prev+1)
  })
  



  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(handleIncrement())} >INCREMENT</button>
      <button onClick={()=>dispatch(handleDecrement())} >DECREMENT</button>
    </div>
  );
}

export default Counter;
