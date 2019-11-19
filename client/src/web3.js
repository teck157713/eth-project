const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider("http://localhost:22000") // Change to port from geth
);
export default web3;