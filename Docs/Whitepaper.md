# DeSciBase Whitepaper

## Introduction

**DeSciBase** is a decentralized platform for publishing, storing, and evaluating scientific research.  
By leveraging blockchain, IPFS/Filecoin, and custom appchain infrastructure (Saga chainlet), it provides an open, censorship-resistant alternative to traditional academic publishing — with built-in incentives and community governance.

## Problem Statement

Traditional scientific publishing is centralized, expensive, and subject to gatekeeping or censorship.  
Open access and data immutability remain largely unsolved, especially in legacy systems controlled by a few major publishers.  
Researchers also lack transparency, fast feedback loops, and global visibility.

## Solution Overview

DeSciBase offers:

- Immutable publication of research papers using blockchain
- IPFS/Filecoin for decentralized file storage
- Like-based social signaling to surface impactful research
- On-chain comment system and discussion layer (planned)
- DAO-based governance for community moderation and funding
- Native chainlet modules for tokenomics, reputation, and IPFS registry (via Saga)

## Architecture

- **Chainlet:** Saga-based blockchain with modular runtime (Cosmos SDK)
- **Modules:** `desciToken`, `reputation`, `dao`, `ipfs`
- **IPFS/Filecoin:** Persistent storage of CAR-archived publications
- **Frontend:** Web3-enabled React app (wallet auth, upload, browse)
- **DAO:** Weighted voting based on token balance + reputation score

## Chainlet Evolution

To overcome the limitations of smart contracts and maximize decentralization,  
DeSciBase is migrating toward a native chainlet powered by [Saga](https://www.saga.xyz).

This appchain architecture allows:
- Direct runtime-level governance and scoring
- Faster logic execution than EVM
- IPFS hash anchoring on-chain
- Upgradeable modules for tokenomics and moderation

Chainlet source and roadmap: [`/saga`](https://github.com/pavave/DeSciBase/tree/main/saga)

## Tokenomics

- **Token:** $DSB (DeSciBase Token) — launched via chainlet governance
- **Utilities:**
  - Voting on DAO proposals
  - Rewarding active users, reviewers, and curators
  - Visibility boosting and reputation tracking
- **Distribution (tentative):**
  - Community & Contributors: 60%
  - Reserve & Treasury: 20%
  - Grants & Ecosystem: 10%
  - Team: 10%

## Roadmap

| Phase                      | Deliverables                                        | Timeline |
|----------------------------|-----------------------------------------------------|----------|
| Phase 1: MVP               | Contracts, likes, IPFS upload                       | Month 1  |
| Phase 2: IPFS Tools        | CAR generator, IPFS pinning                         | Month 2  |
| Phase 3: Saga Architecture | Chainlet repo structure, genesis config, modules    | Month 3  |
| Phase 4: DAO Governance    | Token launch, voting, moderation via chainlet       | Month 4  |
| Phase 5: Testnet & Audit   | Public testnet launch, security audit, documentation| Month 5  |

## Team & Contact

**Valera Pava** — Founder & Blockchain Engineer  
**Mikhail Vorobyov** — Security Researcher / Technical Writer  
**Maxim Turchak** — Full-Stack Web3 Developer  
**Vladislava Pava** — UI/UX Designer & Artist  
**Bogdan Shpyha** — Scientific advisor  
**Additional roles planned:** CosmWasm/Saga engineer, IPFS developer, DAO strategist

📩 Email: pava51030@gmail.com  
Telegram: @td_at  
Twitter/X: [@pavavalera](https://twitter.com/pavavalera)

## License

DeSciBase will be open source under the MIT License.