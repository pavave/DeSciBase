# 🧠 DeSciBase — Decentralized Science Publication Registry

**DeSciBase** is a decentralized platform for publishing, storing, and evaluating scientific research using blockchain and IPFS technology.  
Our goal is to create an open, censorship-resistant, and community-driven ecosystem for scientific knowledge sharing.

---

## 🧬 Vision

DeSciBase is an open and censorship-resistant scientific registry governed by its community. Our goal is to ensure science remains accessible, verifiable, and free from centralized control.

---

## ⚛️ Architecture & Migration Status

Originally, DeSciBase was designed around a dedicated Saga-based appchain (chainlet), embedding governance, reputation scoring, and publication logic directly into the blockchain runtime.

This Saga implementation is **archived** and available for reference in the [`saga-legacy`](https://github.com/pavave/DeSciBase/tree/saga-legacy) branch.

Currently, DeSciBase is migrating toward an **EVM-compatible smart contract architecture** deployed on the Holesky testnet. This migration focuses on leveraging Solidity smart contracts for tokenomics, DAO governance, and publication registries, alongside IPFS for decentralized storage.

---

## ✨ Features

- 📄 Decentralized publication of scientific papers  
- 📦 IPFS integration for file storage  
- 👍 Social features: likes and planned comments  
- 🪙 Token-based incentives and governance via EVM contracts  
- Web3 login (MetaMask)

---

## 🚀 Upcoming Developments

- Integration with Crossref, arXiv, and Zenodo metadata services  
- DOI linking and decentralized citation analytics  
- DAO moderation with Token Curated Registries (TCRs)  
- Institutional pilots and multichain scaling

---

## 📄 Grant Proposals

- [Universal Grant Proposal](./grants/grant-proposal-universal.md)  

---

## 🗺 Roadmap

| Quarter | Milestone                                     |
|---------|-----------------------------------------------|
| Q2 2025 | MVP: Smart contracts, frontend, likes, IPFS upload |
| Q3 2025 | DOI integration, metadata parsing, Zenodo/arXiv |
| Q4 2025 | DAO moderation, citation reputation           |
| Q1 2026 | University pilot, multichain scaling          |

---

## 🔧 Tech Stack

- React + Vite frontend  
- Solidity smart contracts on EVM-compatible networks (Holesky testnet)  
- IPFS + Filecoin for decentralized file storage  
- ethers.js + CosmJS for Web3 wallet integration  
- Web3 wallets: MetaMask, Keplr, Sui, Aptos  

---

## 🧰 CAR Archive Utility

The [`car-utils/`](./car-utils/README.md) module provides tools to generate IPFS `.car` archives from scientific publications, enabling verifiable and immutable storage of research data.

---

## 📬 Contact

📧 Email: pava51030@gmail.com

💬 Telegram: @td_at

🐦 X / Twitter: @_descibase
