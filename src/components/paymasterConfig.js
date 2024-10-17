// src/components/paymasterConfig.js
import { createPublicClient, http } from 'viem'
import { toCoinbaseSmartAccount } from 'viem/account-abstraction'
import { baseSepolia } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

export const RPC_URL = "https://api.developer.coinbase.com/rpc/v1/base-sepolia/4AzgnhwZ2v9iICRxGfMj53bOJJJYAOoM"

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
})

// You'll need to securely manage this private key
const owner = privateKeyToAccount('0xd56ec739fd438662ebdfae8f42a6decf58e14cd3d257457ae25c84322071be0f')

export const createAccount = async () => {
  return await toCoinbaseSmartAccount({
    client,
    owners: [owner]
  })
}