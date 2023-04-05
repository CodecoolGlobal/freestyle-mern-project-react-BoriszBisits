import React from 'react'
import './Details.css';
import '../App.css'

function CharacterDetails({character, onBack}) {

  const familyName = character.family.split(' ')[1]
  let banner=`./assets/${familyName}.jpg`
  
  return (
    <div className='pic'>
      <img src={banner} style={{height: 550}} alt=''></img>
      <div className='details'>
        <img src={character.imgurl} alt="Loading" style={{height: 400}}></img>
        <div>Name: {character.name}</div>
        <div>Title: {character.title}</div>
        <div>Family: {character.family}</div>
        <div>{character.councilMember}</div>
        <div>{character.isAlive}</div>
        <div>Location: {character.location}</div>
        <buttons>
          <button className='header-btn'>Add to Council</button>
          <button className='header-btn'>Kill</button>
        </buttons>
      </div>
      <img src={banner} style={{height: 550}} alt=''></img> 
    </div>
  )
}

export default CharacterDetails;