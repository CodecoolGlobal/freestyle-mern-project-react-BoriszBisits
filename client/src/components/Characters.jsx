import React from 'react'

function Characters({ characters }) {
  return (
    <>
      {characters.map((character, i) => (
        <h2 key={i}>
          {character.fullName}
        </h2>
      ))}
    </>
  )
}

export default Characters