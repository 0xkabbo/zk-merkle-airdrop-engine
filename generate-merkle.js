const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

// Sample whitelist data
const whitelist = [
    { address: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", amount: ethers.parseEther("100") },
    { address: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", amount: ethers.parseEther("250") }
];

// Generate leaves
const leaves = whitelist.map(x => 
    keccak256(ethers.solidityPacked(["address", "uint256"], [x.address, x.amount]))
);

// Create tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);

// Example: Generate proof for the first user
const leaf = leaves[0];
const proof = tree.getHexProof(leaf);
console.log("Proof for User 1:", proof);
