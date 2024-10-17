// config.js
import { createPublicClient, http } from 'viem'
import { toCoinbaseSmartAccount } from 'viem/account-abstraction'
import { baseSepolia } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

// Your RPC url
export const RPC_URL = "https://api.developer.coinbase.com/rpc/v1/base-sepolia/4AzgnhwZ2v9iICRxGfMj53bOJJJYAOoM"

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
})

// Replace with the private key generated from generate-wallet.js
const privateKey = '0xd56ec739fd438662ebdfae8f42a6decf58e14cd3d257457ae25c84322071be0f'
const owner = privateKeyToAccount(privateKey)

export const createAccount = async () => {
  return await toCoinbaseSmartAccount({
    client,
    owners: [owner]
  })
}