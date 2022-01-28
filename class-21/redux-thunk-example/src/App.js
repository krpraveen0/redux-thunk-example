import React from "react";

import {connect} from "react-redux";
import * as actions from "./actions/actions"; 

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Balance:<span style={{color:"green"}}>{this.props.balance}</span></h1>
        <button onClick={this.props.withdaw}><strong>Withdraw</strong></button>
        <button onClick={this.props.deposit}><strong>Deposit</strong></button>
      </div>
    )
  }
}

const receive = (state)=>{
  return{
    balance : state.balance
  }
}

const send = (dispatch)=>{
  return{
    withdaw : () =>{dispatch(actions.onWithdraw(1000))},
    deposit : () =>{dispatch(actions.onDeposit(5000))}
  }
}

export default connect(receive,send)(App);