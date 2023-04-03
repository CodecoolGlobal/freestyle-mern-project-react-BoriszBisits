import React from 'react'

function Characters({ characters, onCharacterDetails ,onCouncil}) {

  return (
    <>
     <button onClick={() => onCouncil()}>My Council</button>
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