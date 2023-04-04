import React from 'react'
import './Details.css';

function CharacterDetails({character, onBack}) {

  const familyName = character.family.split(' ')[1]
  console.log(familyName)
  let banner=`./assets/${familyName}.jpg`
  console.log(banner)
  
  return (
    <div className='pic'>
      <img src={banner} style={{height: 550}}></img>
      <div className='details'>
        <img src={character.imgurl} alt="Loading" style={{height: 450}}></img>
        <div>Name: {character.name}</div>
        <div>Title: {character.title}</div>
        <div>Family: {character.family}</div>
        <div>{character.councilMember}</div>
        <div>{character.isAlive}</div>
        <div>Location: {character.location}</div>
        <buttons>
          <button onClick={()=>onBack()}>Back</button>
          <button>Add to Council</button>
          <button>Kill</button>
        </buttons>
      </div>
      <img src={banner} style={{height: 550}}></img>  
    </div>
  )
}

export default CharacterDetails;