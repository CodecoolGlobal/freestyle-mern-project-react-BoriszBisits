import React, { useEffect, useState } from 'react'
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import Council from './components/Council';
import Header from './components/Header';
import './App.css';

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [character, setCharacter] = useState(null);
  const [view, setView] = useState('characters');
  const [connection, setConnection] = useState(false)


  const fetchConnection = async () => {
    const res = await fetch('/api/connection')
    const data = await res.json();
    return data
  }

  const getData = async () => {
    fetch('/api/characters')
      .then(res => res.json())
      .then(data => {
        setCharacterData(data)
        setConnection(true)})
  }

  const retryCheckConnectionStatus = () => {
    setTimeout(() => {
      fetchConnection()
        .then(connection => {
          if (connection === true) {
            getData()
          } else {
            retryCheckConnectionStatus();
          }
        })
    }, 1000)
  }

  useEffect(() => {
    retryCheckConnectionStatus()
  }, [])

  function handleAddMemberToCouncli(addMember) {
    fetch(`/api/council/${addMember.name}` , {method:'POST'})
    addMember.councilMember = true
    //getCouncil()
  }

  const handleCharacterDetails = (character) => {
    setCharacter(character)
    setView('characterDetails')
  }

  const handleBack = () => {
    setView('characters')
  }

  const handelCouncil = () => {
    setView('council')
  }

  const handleCharacter = () => {
    setView('characters')
  }

  return (
    <div className="App">
      {connection === false && (
        <p style={{fontSize: 25, color: 'aqua'}}>Connecting to the server...</p>
      )}
      {connection === true && (
        <>
          <Header
            onCouncil={handelCouncil}
            onClickCharacter={handleCharacter}
            characters={characterData}
            onAddMemberToCouncli={handleAddMemberToCouncli}
            onCharacterDetails={handleCharacterDetails}
          />
          {view === 'characters' &&
            characterData && (
              <Characters
                characters={characterData}
                onCharacterDetails={handleCharacterDetails}
                onCouncil={handelCouncil}
              />
            )}
          {view === 'characterDetails' && (
            <CharacterDetails
              character={character}
              onBack={handleBack}
            />
          )}
          {view === 'council' && (
            <Council
              characters={characterData}
              onBack={handleBack}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
