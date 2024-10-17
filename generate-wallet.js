import { ethers } from 'ethers';
import { privateKeyToAccount } from 'viem/accounts';

// Generate a new wallet
const wallet = ethers.Wallet.createRandom();

console.log('Private Key:', wallet.privateKey);
console.log('Address:', wallet.address);

// Create a viem account from the private key
const account = privateKeyToAccount(wallet.privateKey);

console.log('Viem Account Address:', account.address);