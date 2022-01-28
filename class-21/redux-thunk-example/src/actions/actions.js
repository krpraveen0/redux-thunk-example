export const onWithdraw = (value)=>{
    return {type: "WITHDRAW",value: value}
};

export const onDepositAsync = (value)=>{
    return {type:"DEPOSIT",value:value};
};

export const onDeposit = (value)=>{
    return (dispatch) =>{
        setTimeout(()=>{
            dispatch(onDepositAsync(value))
        },5000);
    }
};
