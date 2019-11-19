import web3 from './web3'

const address = "0xd9d64b7dc034fafdba5dc2902875a67b5d586420"; // Change this

const abi = [{
    constant: true,
    inputs: [{
        name: "symbol",
        type: "string"
    }, {
        name: "tokenOwner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        name: "balance",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "symbol",
        type: "string"
    }, {
        name: "tokens",
        type: "uint256"
    }],
    name: "withdraw",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "symbol",
        type: "string"
    }, {
        name: "tokens",
        type: "uint256"
    }],
    name: "deposit",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "symbolFrom",
        type: "string"
    }, {
        name: "symbolTo",
        type: "string"
    }, {
        name: "amount",
        type: "uint256"
    }],
    name: "convert",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "symbol",
        type: "string"
    }, {
        name: "to",
        type: "address"
    }, {
        name: "tokens",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        name: "_t",
        type: "address"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}];

export default new web3.eth.Contract(abi, address);