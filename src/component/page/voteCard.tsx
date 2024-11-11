import React from 'react'
import { Icandidate } from '../../types/candidate'


interface props {
    candidate:Icandidate
}

export default function VoteCard({candidate}:props) {
    return (
      <div className='vote-card'>
          <h1>{candidate.name}</h1>
          <button>VOTE</button>
      </div>
    )
  }
