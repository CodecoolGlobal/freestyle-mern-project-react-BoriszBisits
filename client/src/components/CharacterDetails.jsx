import React from 'react'

function CharacterDetails({character, onBack}) {

  return (
    <div>
        {character.name}
        {character.title}
        {character.family}
        {character.councilMember}
        {character.isAlive}
        {character.location}
        {character.quotes}
        
        <img src={character.imgurl} alt="Loading"></img>
        <button onClick={()=>onBack()}>Back</button>
    </div>
  )
}

export default CharacterDetails;