import React from 'react'

function CharacterDetails({character, onBack}) {

  return (
    <div>
        {character.fullName}
        {character.title}
        {character.family}
        <img src={character.imageUrl} alt="Loading"></img>
        <button onClick={()=>onBack()}>Back</button>
    </div>
  )
}

export default CharacterDetails;