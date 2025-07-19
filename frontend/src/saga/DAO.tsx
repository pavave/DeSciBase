import React from "react"
import { submitVote } from "./api"

export default function DAO({ proposalId }: { proposalId: number }) {
  return (
    <div>
      <h2>🗳️ DAO Voting</h2>
      <button onClick={() => submitVote(proposalId, "yes")}>Vote YES</button>
      <button onClick={() => submitVote(proposalId, "no")}>Vote NO</button>
    </div>
  )
}
