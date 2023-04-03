import React from 'react'

function Characters({ characters, onCharacterDetails }) {

  return (
    <>
      {characters.map((character, i) => (
        <h2 key={i}>
          {character.fullName}
          <button onClick={() => onCharacterDetails(character)}>Character Details</button>
        </h2>
      ))}
    </>
  )
}

export default Characters