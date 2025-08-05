# DeSciBase Whitepaper

## Introduction

**DeSciBase** is a decentralized platform for publishing, storing, and evaluating scientific research.  
By leveraging blockchain, IPFS/Filecoin, and Ethereum-compatible smart contracts, it provides an open, censorship-resistant alternative to traditional academic publishing — with built-in incentives and community governance.

## Problem Statement

Traditional scientific publishing is centralized, expensive, and subject to gatekeeping or censorship.  
Open access and data immutability remain largely unsolved, especially in legacy systems controlled by a few major publishers.  
Researchers also lack transparency, fast feedback loops, and global visibility.

## Solution Overview

DeSciBase offers:

- Immutable publication of research papers using Ethereum smart contracts
- IPFS/Filecoin for decentralized file storage
- Like-based social signaling to surface impactful research
- On-chain comment system and discussion layer (planned)
- DAO-based governance for community moderation and funding
- EVM-compatible token with utilities for reputation and curation

## Architecture

- **Smart Contracts:** Solidity-based contracts on EVM chains (Holesky testnet)
- **Token:** ERC20-based utility token ($DSB) with DAO and incentive roles
- **IPFS/Filecoin:** Persistent storage of CAR-archived publications
- **Frontend:** Web3-enabled React app (wallet auth, upload, browse)
- **DAO:** Weighted voting based on token balance and user reputation

## Token Deployment

A test version of the $DSB token has been deployed to the **Holesky testnet** — a public Ethereum test network designed for large-scale testing and staking simulations.

- **Token address (Holesky):** `0xe3562ee3d35C3Cf004691Ea37cC2687f9d5BD784`

This deployment allows developers, contributors, and early testers to interact with the DeSciBase ecosystem in a secure sandbox environment prior to mainnet launch.

## Archived: Chainlet Architecture (Saga)

The original version of DeSciBase was built using **Saga** (a Cosmos SDK-based chainlet).  
That implementation included modular on-chain logic for reputation, governance, and IPFS anchoring at the runtime level.

We have **archived** that implementation in the [`saga-legacy`](https://github.com/pavave/DeSciBase/tree/saga-legacy) branch for future reference or potential hybridization.

## Tokenomics

- **Token:** $DSB (DeSciBase Token) — ERC20 standard
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

| Phase                    | Deliverables                                        | Timeline |
|--------------------------|-----------------------------------------------------|----------|
| Phase 1: MVP             | Contracts, likes, IPFS upload                       | Month 1  |
| Phase 2: IPFS Tools      | CAR generator, IPFS pinning                         | Month 2  |
| Phase 3: EVM Migration   | Solidity contracts, testnet deployment              | Month 3  |
| Phase 4: DAO Governance  | Token utility, voting, moderation logic             | Month 4  |
| Phase 5: Testnet & Audit | Public testnet usage, security audit, documentation| Month 5  |

## Team & Contact

**Valera Pava** — Founder & Blockchain Engineer  
**Mikhail Vorobyov** — Security Researcher / Technical Writer  
**Maxim Turchak** — Full-Stack Web3 Developer  
**Vladislava Pava** — UI/UX Designer & Artist  
**Bogdan Shpyha** — Scientific Advisor  
**Additional roles planned:** Solidity engineer, IPFS developer, DAO strategist

📩 Email: pava51030@gmail.com  
Telegram: [@td_at](https://t.me/td_at)  
Twitter/X: [@_decsibase](https://twitter.com/_descibase)

## License

DeSciBase will be open source under the MIT License.
