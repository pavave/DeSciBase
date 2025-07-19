# ⚙️ Saga Chainlet Configuration — DeSciBase

This file describes core parameters and assumptions for the DeSciBase chainlet running on Saga.

---

## 🪐 Chain Parameters

| Field             | Value / Note                                      |
|------------------|---------------------------------------------------|
| `chain_id`       | `desci-chainlet`                                   |
| `denom`          | `desciToken` (used for transactions & staking)    |
| `genesis_time`   | `2025-07-20T00:00:00Z` (placeholder for launch)   |
| `block_time`     | ~5s target (Saga default)                         |
| `epoch_length`   | Configurable — used for DAO vote cadence          |
| `staking_token`  | `desciToken`                                       |
| `default_supply` | `100_000_000` (subject to tokenomics module)      |
| `validators`     | Starting with 1 validator for devnet/testing      |

---

## 🧩 Module Overview

### 🔹 `token`
- Utility and staking token (`desciToken`)
- Supply defined in genesis or minted via governance proposal

### 🔹 `reputation`
- Non-transferable scores tied to addresses
- Calculated from on-chain actions: publishing, reviewing, DAO voting

### 🔹 `dao`
- Weighted voting system
- Score = token balance + reputation (adjustable multipliers)

### 🔹 `ipfs`
- Accepts CAR file hashes and metadata
- Stored in chain state, optionally verified against IPFS node

---

## 🌍 Interoperability (Planned)

- IBC-compatible architecture
- Potential bridge to Cosmos Hub or other Saga chainlets

---

## 🛠️ Development Tools

- Runtime: Cosmos SDK or Saga's template engine
- Local simulation via CLI or module unit tests
- Chainlet orchestration via `saga chainlet` CLI

---

## ✍️ Notes

- Final parameters may change as modules evolve.
- Genesis file located in [`/saga/genesis/genesis.json`](./genesis/genesis.json)
- See [`roadmap.md`](./roadmap.md) for full launch strategy.

---
