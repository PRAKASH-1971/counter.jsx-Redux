import { store } from "./store";
import * as types from "./actionTypes"

const handleIncrement=()=>{
    //   setCounter((prev)=>{
    //     return prev + 1;
    //   })
    console.log(store.getState());
    return {type:"INCREMENT",payload:1}
}

const handleDecrement=()=>{
    // setCounter((prev)=>prev-1);
    console.log(store.getState());
      return {type:"DECREMENT",payload:1}
    }
    

    export {handleDecrement,handleIncrement}