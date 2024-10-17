import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import Web3 from 'web3';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const CoinbaseWalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  const connectWallet = useCallback(async () => {
    try {
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: 'Learn Trail',
        appLogoUrl: 'https://example.com/logo.png',
        darkMode: false,
      });

      const ethereum = coinbaseWallet.makeWeb3Provider('https://api.developer.coinbase.com/rpc/v1/base-sepolia/4AzgnhwZ2v9iICRxGfMj53bOJJJYAOoM', 84532);

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      
      const web3Instance = new Web3(ethereum);

      setAccount(account);
      setWeb3(web3Instance);

      console.log('Wallet connected:', account);
      console.log('Web3 instance:', web3Instance);
      console.log('Web3 eth methods:', Object.keys(web3Instance.eth));
      console.log('Is Contract available:', !!web3Instance.eth.Contract);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  }, []);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  return (
    <WalletContext.Provider value={{ account, web3, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};