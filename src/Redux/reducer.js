import * as types from "./actionTypes"




const reducer = (oldState,action) =>{
    const {type,payload} = action;
    switch(action.type){
        case types.INCREMENT:
            return {...oldState,counter: oldState.counter+payload};
        case types.DECREMENT:
            return {...oldState,counter: oldState.counter-payload};
        default:
            return oldState;
    }
}

export {reducer}