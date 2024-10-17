//config.js
import { createPublicClient, http } from 'viem'
import { toCoinbaseSmartAccount } from 'viem/account-abstraction'
import { baseSepolia } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'

// Your RPC url. Make sure you're using the right network (base vs base-sepolia)
export const RPC_URL = "https://api.developer.coinbase.com/rpc/v1/base-sepolia/4AzgnhwZ2v9iICRxGfMj53bOJJJYAOoM"

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
})

// Creates a Coinbase smart wallet using an EOA signer
const owner = privateKeyToAccount('<your-private-key>')
export const account = await toCoinbaseSmartAccount({
  client,
  owners: [owner]
}) 