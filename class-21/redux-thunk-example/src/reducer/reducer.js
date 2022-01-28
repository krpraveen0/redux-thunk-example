const initalState = {
    balance : 5000
}

const reducer = (state=initalState,action)=>{
    const newState = {...state}
    switch(action.type){
        case "WITHDRAW":
            newState.balance -= action.value;
            // newState.balance = newState.balance - action.value
            break;
        case "DEPOSIT":
            newState.balance += action.value;
            break;
        default:
            return newState
    }
    return newState;
};

export default reducer;