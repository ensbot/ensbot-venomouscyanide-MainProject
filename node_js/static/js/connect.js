if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

		web3.eth.defaultAccount = web3.eth.accounts[0];
		var registerUser = web3.eth.contract([
	{
		"constant": false,
		"inputs": [],
		"name": "Time_call",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "reportNo",
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
		"inputs": [],
		"name": "count",
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
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "getUserByEmail",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "age",
				"type": "uint256"
			},
			{
				"name": "add",
				"type": "string"
			},
			{
				"name": "mobile",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			},
			{
				"name": "image_hash",
				"type": "string"
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
				"name": "count",
				"type": "uint256"
			},
			{
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "allEdits",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "age",
				"type": "uint256"
			},
			{
				"name": "image_hash",
				"type": "string"
			},
			{
				"name": "time_stamp",
				"type": "uint256"
			},
			{
				"name": "mobile",
				"type": "uint256"
			},
			{
				"name": "add",
				"type": "string"
			},
			{
				"name": "status",
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
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "testing",
		"outputs": [
			{
				"name": "va",
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
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "getUserByEmailForRegistration",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "age",
				"type": "uint256"
			},
			{
				"name": "add",
				"type": "string"
			},
			{
				"name": "mobile",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			},
			{
				"name": "image_hash",
				"type": "string"
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
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "returnCandidateList",
		"outputs": [
			{
				"name": "candidate",
				"type": "string"
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
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "getLogCount",
		"outputs": [
			{
				"name": "counting",
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
				"name": "electronicmail",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getLogDataByCount",
		"outputs": [
			{
				"name": "date",
				"type": "string"
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
				"name": "no",
				"type": "uint256"
			}
		],
		"name": "getReport",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "inactive",
				"type": "uint256"
			},
			{
				"name": "message",
				"type": "string"
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
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "returnBlockNumber",
		"outputs": [
			{
				"name": "blockNumber",
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
				"name": "electionID",
				"type": "uint256"
			}
		],
		"name": "returnElectionID",
		"outputs": [
			{
				"name": "eid",
				"type": "uint256"
			},
			{
				"name": "start",
				"type": "string"
			},
			{
				"name": "stop",
				"type": "string"
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
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "getUserByID",
		"outputs": [
			{
				"name": "email",
				"type": "string"
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
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "returnParticipantList",
		"outputs": [
			{
				"name": "participant",
				"type": "string"
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
				"name": "msg",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			}
		],
		"name": "addReport",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "cid",
				"type": "uint256"
			},
			{
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "votingInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "electronicmail",
				"type": "string"
			}
		],
		"name": "check_latest",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "participant",
				"type": "string"
			}
		],
		"name": "addElectionParticipant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "addElectionCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"name": "counter",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "age",
				"type": "uint256"
			},
			{
				"name": "add",
				"type": "string"
			},
			{
				"name": "mobile",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			},
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "image_hash",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "start",
				"type": "string"
			},
			{
				"name": "stop",
				"type": "string"
			}
		],
		"name": "addStartStop",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "electionID",
				"type": "uint256"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "checkIfVoted",
		"outputs": [
			{
				"name": "a",
				"type": "bool"
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
				"name": "email",
				"type": "string"
			},
			{
				"name": "no",
				"type": "uint256"
			}
		],
		"name": "deactivateReport",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "electronicmail",
				"type": "string"
			},
			{
				"name": "logValue",
				"type": "string"
			}
		],
		"name": "addLogData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);       
	var register = registerUser.at('0x860ba3f1e7cb61931448a1193bf0056d365f3221');
	console.log(register);
