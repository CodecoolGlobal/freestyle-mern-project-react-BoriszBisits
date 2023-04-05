import React, { useEffect } from 'react'
import { useState } from 'react';

function Council({ onBack, characters }) {

  const [myCouncil, setMyCouncil] = useState([])
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(undefined)

  function getCouncil() {
    setMyCouncil(characters.filter(char =>
      char.councilMember === true && char.isAlive === true
    ))
  }

  useEffect(() => {
    getCouncil()
  }, [])

  const handleChange = (value) => {
    setInput(value);
    const result = characters.filter((element) => {
      return (
        value &&
        element.name.toLowerCase().includes(value.toLowerCase()) &&
        element.councilMember === false && 
        element.isAlive ===true
      );
    });
    setSelect(result)
  };

  function handleAddMemberToCouncli(addMember) {
    fetch(`/api/council/${addMember.name}` , {method:'POST'})
    addMember.councilMember = true
    getCouncil()
  }

  function killClick(deadone){
    deadone.isAlive=false;
    fetch(`/api/character/${deadone.name}` , {method:'POST'})
  }

  return (
    <div>
      <input
        placeholder="Type for search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {select && select.map((element, i) =>
        <>
          <h1 key={i}>{element.name}</h1>
          <button onClick={() => handleAddMemberToCouncli(element)}>Add To Council</button>
        </>
      )}

      {myCouncil && myCouncil.map((member, i) => (
        <>
          <h1 key={i}>{member.name}</h1>
          <button key={`btn${i}`} onClick={()=>killClick(member)}>Kill</button>
        </>
      ))}
    </div>
  );
};

export default Council
