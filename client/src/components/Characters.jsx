import React from 'react'

function Characters({ characters }) {
  return (
    <>
      {characters.map((character, i) => (
        <h2 key={i}>
          {character.name}
        </h2>
      ))}
    </>
  )
}

export default Characters