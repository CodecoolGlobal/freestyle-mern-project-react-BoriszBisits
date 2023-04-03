import React, {useEffect, useState}from 'react'
import Characters from './components/Characters';
import './App.css';

function App() {
  const[characterData, setCharacterData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/characters');
      const data = await res.json();
      setCharacterData(data);
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {characterData && 
      <Characters
      characters={characterData}
      />}
     
    </div>
  );
}

export default App;
