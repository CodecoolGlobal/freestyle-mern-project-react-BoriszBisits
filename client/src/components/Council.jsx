import React, { useEffect, useState } from 'react'
import '../App.css';

function Council({ onBack, characters }) {

  const [myCouncil, setMyCouncil] = useState([])
  

  function getCouncil() {
    setMyCouncil(characters.filter(char =>
      char.councilMember === true && char.isAlive === true
    ))
  }

  useEffect(() => {
    getCouncil()
  }, [])

  

  

  function killClick(deadone){
    deadone.isAlive=false;
    fetch(`/api/character/${deadone.name}` , {method:'POST'})
  }

  return (
    <div>
      

      {myCouncil && myCouncil.map((member, i) => (
        <>
          <h1 key={i}>{member.name}</h1>
          <button className='header-btn'  key={`btn${i}`} onClick={()=>killClick(member)}>Kill</button>
        </>
      ))}
    </div>
  );
};

export default Council
