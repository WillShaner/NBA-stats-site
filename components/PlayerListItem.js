import React from 'react'
import Link from 'next/link'
const PlayerListItem = ({ player }) => {
  return (
    <Link href="/players/[id]" as={`players/${player.id}`}>
      <h6>{player.first_name} {player.last_name}</h6>
    </Link>
  )
}

export default PlayerListItem