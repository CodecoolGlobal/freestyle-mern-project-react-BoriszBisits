const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

let theCharacters;


const fetchCharacters = async () => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await res.json();
    theCharacters = data;
  };
  fetchCharacters();


app.listen(5000, () => {
    console.log('Server: http://localhost:5000');
});