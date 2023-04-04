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
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/characters');
      const data = await res.json();
      //console.log(data)
      setCharacterData(data);
      
    }
    fetchData()
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
          />)}

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
    </div>
  );
}

export default App;
