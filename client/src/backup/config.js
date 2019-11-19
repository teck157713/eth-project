export const TODO_LIST_ADDRESS = '0x9C3E3f2cBf1c5f7affCd957199C258F0cC026Bd6'

export const TODO_LIST_ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "exchangeRate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "authorisedUsers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "approvee",
				"type": "address"
			}
		],
		"name": "isAuthorise",
		"outputs": [
			{
				"name": "authorise",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "symbolFrom",
				"type": "string"
			},
			{
				"name": "symbolTo",
				"type": "string"
			}
		],
		"name": "getExchangeRate",
		"outputs": [
			{
				"name": "fxRate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "approvee",
				"type": "address"
			}
		],
		"name": "approveUser",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "symbolFrom",
				"type": "string"
			},
			{
				"name": "symbolTo",
				"type": "string"
			},
			{
				"name": "rate",
				"type": "uint256"
			}
		],
		"name": "changeRate",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]