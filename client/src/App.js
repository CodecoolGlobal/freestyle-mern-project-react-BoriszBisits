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

  const fetchData = async () => {
    const res = await fetch('/api/characters');
    const data = await res.json();
    setCharacterData(data);
  }

  const retryCheckConnectionStatus = () => {
    setTimeout(() => {
      fetchConnection()
        .then(connection => {
          if (connection === true) {
            fetch('/api/characters')
              .then(res => res.json())
              .then(data => (
                setCharacterData(data),
                setConnection(true)))
          } else {
            retryCheckConnectionStatus();
          }
        })
    }, 1000)
  }

  useEffect(() => {
    retryCheckConnectionStatus()
  }, [])

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
        <p>Connecting to the server...</p>
      )}
      {connection === true && (
        <>
          <Header
            onCouncil={handelCouncil}
            onClickCharacter={handleCharacter}
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
