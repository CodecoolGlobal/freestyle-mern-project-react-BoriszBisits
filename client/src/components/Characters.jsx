import React from 'react'

function Characters({ characters, onCharacterDetails ,onCouncil}) {

  return (
    <>
     <button onClick={() => onCouncil()}>My Council</button>
      {characters.map((character, i) => (
        <div key={i}>
        <h2>{character.name}</h2>
        <h3>{character.title}</h3>
        <img src={character.imgurl} alt={character.img}></img>
          <button onClick={() => onCharacterDetails(character)}>Character Details</button>
        </div>
      ))}


    </>
  )
}

export default Characters