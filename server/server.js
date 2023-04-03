const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

let theCharacters;


const fetchCharacters = async () => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await res.json();
    theCharacters = data;
  };

fetchCharacters();

app.get('/welcome', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;
app.listen(port, () => console.log(`http://127.0.0.1:${port}/welcome`));