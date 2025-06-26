// generateCar.js
import fs from 'fs'
import path from 'path'
import { pack } from 'ipfs-car/pack'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

const pdfPath = args.pdf
const metaPath = args.meta
const outPath = args.out || './output/article.car'

if (!pdfPath || !metaPath) {
  console.error('❌ Usage: node generateCar.js --pdf <file.pdf> --meta <file.json> --out <file.car>')
  process.exit(1)
}

async function generateCar() {
  const inputs = [
    { path: 'article.pdf', content: fs.createReadStream(pdfPath) },
    { path: 'metadata.json', content: fs.createReadStream(metaPath) }
  ]

  const { car } = await pack({ input: inputs })
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, car)

  console.log('✅ CAR file generated:', outPath)
}

generateCar().catch((err) => {
  console.error('❌ Error generating CAR file:', err)
})
