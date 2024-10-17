// src/utils/quizContractConfig.js

export const QUIZ_CONTRACT_ADDRESS = '0x9F901376e91EC162B586059423afF5E0A2744FE2';

export const QUIZ_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_trailToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quizId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "reward",
        "type": "uint256"
      }
    ],
    "name": "QuizCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quizId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "newVersion",
        "type": "uint32"
      }
    ],
    "name": "QuizUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_baseReward",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "_passingScore",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "_cooldownPeriod",
        "type": "uint32"
      }
    ],
    "name": "addOrUpdateQuiz",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_quizId",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "_score",
        "type": "uint16"
      }
    ],
    "name": "completeQuiz",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quizId",
        "type": "uint256"
      }
    ],
    "name": "getUserQuizAttempt",
    "outputs": [
      {
        "internalType": "bool",
        "name": "completed",
        "type": "bool"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "lastAttemptTime",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "attemptedVersion",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "quizzes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "baseReward",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "passingScore",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "cooldownPeriod",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "version",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "trailToken",
    "outputs": [
      {
        "internalType": "contract TRAIL",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userAttempts",
    "outputs": [
      {
        "internalType": "bool",
        "name": "completed",
        "type": "bool"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "lastAttemptTime",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "attemptedVersion",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
