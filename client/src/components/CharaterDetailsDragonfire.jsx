import React from 'react'
import './Details.css';
import '../App.css'

function CharacterDetails({character, onAddMemberToCouncil}) {

  const familyName = character.family.split(' ')[1]
  let banner=`./assets/${familyName}.jpg`

  function deleteFromDataBase(character){
    
      
    console.log(character._id)
      fetch(`/api/dragonfire/${character._id}`, { method: "DELETE" });
      
    }
  
  
  return (
    <div className='pic'>
      <img src={banner} style={{height: 550}} alt=''></img>
      <div className='details'>
        <img src={character.imgurl} alt="Loading" style={{height: 400}}></img>
        <div>Name: {character.name}</div>
        <div>Title: {character.title}</div>
        <div>Family: {character.family}</div>
        <div>Location: {character.location}</div>
        <div name='buttons'>
          {character.councilMember === false &&  <button className='header-btn' onClick={() => onAddMemberToCouncil(character)}>Add to Council</button>}
          <button className='header-btn' onClick={()=>deleteFromDataBase(character)}>Kill By Dragon Fire</button>      
        </div>
      </div>
      <img src={banner} style={{height: 550}} alt=''></img> 
    </div>
  )
}

export default CharacterDetails;