📦 DeSciBase CAR Generator
This utility generates IPFS .car archives from scientific articles in PDF format, along with metadata in JSON. These archives can be stored on IPFS or downloaded locally as verifiable proofs of publication authenticity.

⚙️ Features
- Generates .car files from:
- Scientific article (PDF)
- Associated metadata (JSON)
- IPFS CID-structured output
- Compatible with Pinata and Web3.Storage
- Command-line ready

📁 Folder Structure
car-utils/
├── generateCar.js
├── metadata.schema.json
├── example-output/
│   └── sample.car
├── README.md



🚀 Installation
npm install ipfs-car



📄 Usage Example
node generateCar.js --pdf ./input/article.pdf --meta ./input/metadata.json --out ./output/article.car


Or in Node.js:
import { pack } from 'ipfs-car/pack'
const { car } = await pack({
  input: [
    { path: 'article.pdf', content: fs.createReadStream('article.pdf') },
    { path: 'metadata.json', content: fs.createReadStream('metadata.json') }
  ]
})
fs.writeFileSync('article.car', car)



🧠 metadata.json Format
{
  "title": "Quantum Effects in Blockchain Networks",
  "authors": ["Alice Doe", "Bob Smith"],
  "doi": "10.1234/desci.001",
  "created": "2025-06-30T12:00:00Z",
  "cid": "Qm... (CID of article.pdf)"
}


Refer to metadata.schema.json for full structure.

✅ Output
- .car archive ready for IPFS storage or local backup
- CID of files can be anchored on-chain or stored in DeSciBase DB
- Enables authenticity checks and long-term immutability

📌 Use Cases
- Archiving scientific papers with verifiable integrity
- Proving authorship and publication timestamp
- Submitting to IPFS Utility Grants

Let me know if you'd like to pair this with the actual generateCar.js file — I can prep it next.
