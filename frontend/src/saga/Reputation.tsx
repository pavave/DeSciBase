import React, { useEffect, useState } from "react"
import { getReputationScore } from "./api"

export default function ReputationDashboard({ address }: { address: string }) {
  const [score, setScore] = useState<number | null>(null)

  useEffect(() => {
    getReputationScore(address).then((data) => setScore(data.score))
  }, [address])

  return (
    <div>
      <h2>🔬 Reputation</h2>
      <p>Address: {address}</p>
      <p>Score: {score ?? "Loading..."}</p>
    </div>
  )
}
