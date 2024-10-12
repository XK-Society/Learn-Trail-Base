// src/components/CoinbaseWalletProvider.jsx
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import Web3 from 'web3';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const CoinbaseWalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [sdk, setSdk] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initSDK = () => {
      const newSdk = new CoinbaseWalletSDK({
        appName: 'Learn Trail',
        appLogoUrl: 'https://example.com/logo.png', // Replace with your app's logo URL
        darkMode: false,
        appChainIds: [84532] // Base sepolia chain ID
      });
      setSdk(newSdk);
    };

    initSDK();  
  }, []);

  const connectWallet = useCallback(async () => {
    if (sdk) {
      const coinbaseWalletProvider = sdk.makeWeb3Provider({
        options: 'smartWalletOnly'
      });

      try {
        const accounts = await coinbaseWalletProvider.request({
          method: 'eth_requestAccounts'
        });

        setAccount(accounts[0]);
        const newWeb3 = new Web3(coinbaseWalletProvider);
        setWeb3(newWeb3);
        setProvider(coinbaseWalletProvider);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    }
  }, [sdk]);

  const disconnectWallet = useCallback(() => {
    if (provider && provider.close) {
      provider.close();
    }
    setAccount(null);
    setProvider(null);
    setWeb3(null);
  }, [provider]);

  return (
    <WalletContext.Provider value={{ account, web3, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};