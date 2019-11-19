import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config';

class App extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
          storageValue: 0,
          web3: null,
          account: ''
      }
      this.addToSimpleStorage = this.addToSimpleStorage.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
        
      console.log(instance);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, account: accounts[0]});
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  addToSimpleStorage(){
      if (this.state.simpleStorageInstance && this.state.accounts) {
          const value = this.storageAmountInput.value;
          this.state.simpleStorageInstance.set(value, {from: this.state.account[0]})
              .then((result) => {
                  return this.state.simpleStorageInstance.get.call(this.state.accounts[0])
              }).then((result) => {
                  this.setState(prevState => ({
                      ...prevState,
                      storageValue: result.c[0]
                  }));
              }).catch((err) => {
                  console.log('error');
                  console.log(err);
              });
      } else {
          this.setState(prevState => ({
              ...prevState,
              error: new Error('simple storage instance not loaded')
          }))
      }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <form className="pure-form pure-form-stacked">
            <fieldset>
            <label htmlFor="storage">Storage Amount</label>
            <input id="storage" type="number" ref={c => { this.storageAmountInput = c }} />
            <button
                className="pure-button"
                onClick={(e) => {
                    e.preventDefault();
                    this.addToSimpleStorage()
                }}>Set Storage
             </button>
             </fieldset>
        </form>
      


    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Kenny's Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="solutions.html" className="nav-link">Solution</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Backside</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="portfolio.html">Seller</a>
                  <a className="dropdown-item" href="portfolio-single.html">Portfolio Single</a>
                </div>
            </li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    

<section className="home-slider ftco-degree-bg">
      <div className="slider-item">
        <div className="overlay">
      <div className="container bg-light">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h4">Blockchain Information</h2>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3">
            <p><span>Your Contract Address:</span> {this.state.contract[0]}</p>
          </div>
          <div className="col-md-3">
            <p><span>Gateway:</span> <a href="tel://1234567920">217.182.195.23</a></p>
          </div>
          <div className="col-md-3">
            <p><span>Your account:</span> {this.state.account}</p>
          </div>
          <div className="col-md-3">
            <p><span>Website</span> <a href="#">this.com</a></p>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-12 pr-md-5">
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Contract" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Amount" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Currency" />
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          
          </div>

        </div>
      </div>

</div>
</div>
</section>



</div>
    );
  }
}

export default App;
