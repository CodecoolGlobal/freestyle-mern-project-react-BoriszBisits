import React, { useEffect, useState } from 'react'
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import './App.css';

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [character, setCharacter] = useState(null);
  const [view, setView] = useState('characters');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/characters');
      const data = await res.json();
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

  return (
    <div className="App">
      {view === 'characters' &&
        characterData && (
        <Characters
          characters={characterData}
          onCharacterDetails={handleCharacterDetails}
        />)}
        
      {view === 'characterDetails' && (
        <CharacterDetails
          character={character}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
