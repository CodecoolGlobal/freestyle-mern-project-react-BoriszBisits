import React, { useEffect } from 'react'
import { useState } from 'react';

function Council({ onBack, characters }) {

  const [myCouncil, setMyCouncil] = useState([])
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(undefined)

  function getCouncil() {
    setMyCouncil(characters.filter(char =>
      char.councilMember === true
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
        element.councilMember === false
      );
    });
    setSelect(result)
  };

  function handleAddMemberToCouncli(addMember) {
    //fetch(`/api/council/${addMember}` , {method:'POST'})
    addMember.councilMember = true
    getCouncil()
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
          <button key={`btn${i}`}>Kill</button>
        </>
      ))}
    </div>
  );
};



export default Council
