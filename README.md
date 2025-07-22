# 🧠 DeSciBase — Decentralized Science Publication Registry

**DeSciBase** is a decentralized platform for publishing, storing, and evaluating scientific research using blockchain and IPFS technology.  
Our goal is to create an open, censorship-resistant, and community-driven ecosystem for scientific knowledge sharing.

---

## 🧬 Vision

DeSciBase is an open and censorship-resistant scientific registry governed by its community. Our goal is to ensure science remains accessible, verifiable, and free from centralized control.

---

## ⚛️ Saga Chainlet Migration

As part of our long-term decentralization strategy, DeSciBase is migrating toward a dedicated Saga-based appchain (chainlet).  
This allows us to go beyond smart contracts by embedding governance, reputation scoring, and publication logic directly into the blockchain runtime.

🏗️ In-progress architecture includes:
- `desciToken`: native utility token module
- `reputation`: scoring system tied to peer review, publishing, and moderation
- `dao`: weighted governance logic based on tokens + reputation
- `ipfs`: CAR file registry for immutable storage of scientific publications

🛠️ Chainlet source and roadmap: [`/saga`](./saga)

📍 Status: Early-stage. Modules and genesis config are being drafted as part of our Saga grant preparation.

---

## ✨ Features

- 📄 Decentralized publication of scientific papers
- 📦 IPFS integration for file storage
- 👍 Social features: likes and (planned) comments
- 🪙 Token-based incentives and governance (planned)
- Web3 login (Metamask, Keplr, Sui, Aptos)

---

## 🚀 Next Up

- Integration with Crossref, arXiv, Zenodo
- DOI linking and decentralized citation analytics
- Hybrid moderation → DAO using Token Curated Registries
- Institutional pilot + multichain expansion

---

## 📄 Grant Proposals

- [Universal Grant Proposal](./grants/grant-proposal-universal.md)  

---

## 🗺 Roadmap

| Quarter | Milestone |
|---------|-----------|
| Q2 2025 | MVP: Contracts, frontend, likes, IPFS upload |
| Q3 2025 | DOI integration, metadata parsing, Zenodo/arXiv |
| Q4 2025 | DAO moderation, citation reputation |
| Q1 2026 | University pilot, multichain scaling |

---

## 🔧 Tech Stack

- React + Vite frontend  
- Cosmos SDK + Saga runtime (chainlet modules in Rust/Go)  
- IPFS + Filecoin for decentralized file storage  
- ethers.js + CosmJS for Web3 wallet integration  
- Saga Devnet + custom chainlet RPC  

## 🧰 CAR Archive Utility

The [`car-utils/`](./car-utils/README.md) module provides tools to generate IPFS `.car` archives from scientific publications, enabling verifiable and immutable storage of research data.

## 📬 Contact

📧 Email: pava51030@gmail.com

💬 Telegram: @td_at

🐦 X / Twitter: @_descibase


   
