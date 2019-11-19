import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import fxexchange from './fxexchange';
import fiattoken from './fiattoken';

class App extends Component {
  state = {
    account: '',
    usdbal: 0,
    sgdbal: 0,
    rate: 0,
    value: 0
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
//    await fiattoken.methods.deposit("USD", 10000).send({
//        from: account
//    });
    const usdbal = await fiattoken.methods.balanceOf("USD", account).call();
    const sgdbal = await fiattoken.methods.balanceOf("SGD", account).call();
    const rate = await fxexchange.methods.getExchangeRate("USD", "SGD").call();
    this.setState({ account, usdbal, sgdbal, rate });
  }

   onSubmit = async (event) => {
     event.preventDefault();

//     const accounts = await web3.eth.getAccounts();

//     this.setState({ message: 'Waiting on transaction success...' });

     await fiattoken.methods.convert("USD", "SGD", this.state.value).send({
       from: this.state.account
     });

//     this.setState({ message: 'You have been entered!' });
   };

//   onClick = async () => {
//     const accounts = await web3.eth.getAccounts();

//     this.setState({ message: 'Waiting on transaction success...' });

//     await lottery.methods.pickWinner().send({
//       from: accounts[0]
//     });

//     this.setState({ message: 'A winner has been picked!' });
//   }

  render() {
    return (
        <div>
          <h1>USD to SGD: {this.state.rate}</h1>
          <h1>USD bal: {this.state.usdbal}</h1>
          <h1>SGD bal: {this.state.sgdbal}</h1>
          <h2>{this.state.account}</h2>
          <form onSubmit = {this.onSubmit}>
              <h4>Convert Money?</h4>
              <div>
                <label>Amount of USD to convert to SGD</label>
                <input
                  value = {this.state.value}
                  onChange = {event => this.setState({ value: event.target.value })}
                />
              </div>
              <button>Enter</button>
            </form>
        </div>
    );
  }
}
  

export default App;
