import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import fxexchange from './fxexchange';
import fiattoken from './fiattoken';

class App extends Component {
  state = {
    exchangeRates: {}
  };

  async componentDidMount() {
    const rates = await fxexchange.methods.exchangeRate().call();

    this.setState({ rates });
  }

//   onSubmit = async (event) => {
//     event.preventDefault();

//     const accounts = await web3.eth.getAccounts();

//     this.setState({ message: 'Waiting on transaction success...' });

//     await lottery.methods.enter().send({
//       from: accounts[0],
//       value: web3.utils.toWei(this.state.value, 'ether')
//     });

//     this.setState({ message: 'You have been entered!' });
//   };

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
      <table>
          <tr>
              <th>From</th>
              <th>To</th>
              <th>Rate</th>
          </tr>
          <tr>
              <td>USD</td>
              <td>SGD</td>
              <td>{fxexchange.getExchangeRate("USD", "SGD")}</td>
          </tr>
      </table>
    );
  }
}
  

export default App;
