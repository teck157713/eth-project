import web3 from './web3'

const address = "0x1349f3e1b8d71effb47b840594ff27da7e603d17"; // Change this

const abi = [{
    constant: true,
    inputs: [{...}, {...}],
    name: "balanceOf",
    outputs: [{...}],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{...}, {...}],
    name: "withdraw",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{...}, {...}],
    name: "deposit",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{...}, {...}, {...}],
    name: "convert",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{...}, {...}, {...}],
    name: "transfer",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}];

export default new web3.eth.Contract(abi, address);