# ZK Merkle Airdrop Engine

This repository provides a professional solution for distributing tokens to thousands of users without the astronomical gas costs of on-chain mapping. By utilizing a Merkle Tree, the contract only needs to store a single 32-byte `merkleRoot`.

## How It Works
1. **Off-Chain**: Generate a Merkle Tree from a list of eligible addresses and amounts.
2. **On-Chain**: Deploy the contract with the `merkleRoot`.
3. **Claiming**: Users provide a Merkle Proof (generated off-chain) to verify their eligibility.
4. **Security**: Uses OpenZeppelin's `MerkleProof` library to prevent spoofing and double-claiming.

## Technical Stack
- **Solidity**: For the smart contract logic.
- **MerkleTree.js**: For generating proofs and roots in the script.
- **Ethers.js**: For blockchain interaction.
