import web3 from './web3'

const address = "0x1932c48b2bf8102ba33b4a6b545c32236e342f34"; // Change this

const abi = [{
    constant: true,
    inputs: [{...}, {...}],
    name: "exchangeRate",
    outputs: [{...}],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{...}],
    name: "authorisedUsers",
    outputs: [{...}],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{...}],
    name: "isAuthorise",
    outputs: [{...}],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{...}, {...}],
    name: "getExchangeRate",
    outputs: [{...}],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{...}],
    name: "approveUser",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{...}, {...}, {...}],
    name: "changeRate",
    outputs: [{...}],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}];

export default new web3.eth.Contract(abi, address);