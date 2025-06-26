# 📦 DeSciBase CAR Generator

This module allows you to generate IPFS `.car` (Content Addressed Archive) files from scientific publications in PDF format, along with structured metadata in JSON. These archives can be stored on IPFS or downloaded locally as verifiable, immutable records of publication.

---

## ⚙️ Features

- Convert PDF + metadata into a single `.car` archive  
- Compatible with [ipfs-car](https://github.com/web3-storage/ipfs-car)  
- Ready for integration with Pinata or Web3.Storage  
- CLI support for quick usage  
- JSON schema for consistent metadata formatting

---

## 🛠️ Installation

```bash
npm install ipfs-car minimist
```

---

## 🚀 Usage

Via CLI:

```bash
node generateCar.js --pdf ./input/article.pdf --meta ./input/metadata.json --out ./output/article.car
```

Or inside Node.js:

```js
import { pack } from 'ipfs-car/pack'
const { car } = await pack({
  input: [
    { path: 'article.pdf', content: fs.createReadStream('article.pdf') },
    { path: 'metadata.json', content: fs.createReadStream('metadata.json') }
  ]
})
fs.writeFileSync('article.car', car)
```

---

## 🧠 `metadata.json` Format

```json
{
  "title": "Quantum Effects in Blockchain Networks",
  "authors": ["Alice Doe", "Bob Smith"],
  "doi": "10.1234/desci.001",
  "created": "2025-06-30T12:00:00Z",
  "cid": "Qm... (CID of article.pdf)"
}
```

See `metadata.schema.json` for validation rules.

---

## 📁 Folder Contents

```
car-utils/
├── generateCar.js             # CLI tool for generating CAR files
├── metadata.schema.json       # JSON schema for publication metadata
├── example-output/            # (Optional) sample generated CAR files
└── README.md                  # This file
```

---

## ✅ Output

- A `.car` archive bundling the publication and metadata  
- IPFS-compatible structure with content-addressed CID  
- Verifiable proof of authorship and immutability

---

## 📌 Use Cases

- Decentralized archival of scientific papers  
- Proof-of-publication with verifiable CIDs  
- IPFS Utility Grant deliverables