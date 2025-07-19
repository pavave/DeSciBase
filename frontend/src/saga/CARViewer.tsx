import React from "react"

export default function CARViewer({ carCid }: { carCid: string }) {
  return (
    <div>
      <h2>📦 Publication Archive</h2>
      <p>IPFS CAR CID:</p>
      <code>{carCid}</code>
      <a href={`https://ipfs.io/ipfs/${carCid}`} target="_blank" rel="noopener noreferrer">
        View on IPFS
      </a>
    </div>
  )
}
