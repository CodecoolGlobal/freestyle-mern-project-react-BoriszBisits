const mongoose = require('mongoose');
const express = require('express');
const Character = require('./model/character.js');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Zoli:paiscomming@cluster0.ttqbvg2.mongodb.net/characters').then(() => console.log('Connected'))

let theCharacters;
const quotes= [];

async function getChar () {
  const response = await Character.find();
  const charList = response.map((e) => {
    return e.name;
  });
  return Promise.resolve(charList);
}


app.get('api/characters', async(req, res) => {
  getChar()
    .then((charList) => {
      res.send(charList);
    });
})



//createdb
const families = [
  { name: 'House Stark', location: 'Winterfell' },
  { name: 'House Lannister', location: 'Casterly Rock' },
  { name: 'House Targaryen', location: 'Dragonstone' },
  { name: 'House Baratheon', location: 'Storms End' },
  { name: 'House Greyjoy', location: 'Pyke' },
  { name: 'House Martell', location: 'Sunspear' },
  { name: 'House Tyrell', location: 'Highgarden' },
  { name: 'House Arryn', location: 'The Eyrie' },
  { name: 'House Tully', location: 'Riverrun' },
  { name: 'House Frey', location: 'The Twins' },
  { name: 'House Bolton', location: 'Dreadfort' },
  { name: 'House Mormont', location: 'Bear Island' },
  { name: 'House Umber', location: 'Last Hearth' },
  { name: 'House Karstark', location: 'Karhold' },
  { name: 'House Glover', location: 'Deepwood Motte' },
  { name: 'House Clegane', location: 'Cleganes Keep' },
  { name: 'House Mallister', location: 'Seagard' },
  { name: 'House Reed', location: 'Greywater Watch' },
  { name: 'House Dayne', location: 'Starfall' },
  { name: 'House Tarly', location: 'Horn Hill' }
];

//console.log(families);

app.get('/api/characters/createdb', async (req, res) => {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await response.json();
    theCharacters = data;
  
    //console.log(data)
    const zizi = data.map((char) => {
      const name = char.fullName
      const title = char.title
      const family = char.family
      const img = char.image
      const imgurl = char.imageUrl
      const councilMember = false
      const isAlive = true
      const location = ''
      const quotes = ['']
      const character = new Character({
        name,
        title,
        family,
        img,
        imgurl,
        councilMember,
        isAlive,
        location,
        quotes,
      })
      const familyData = families.find(family => family.name === character.family);
      if (familyData) {
        character.location = familyData.location;
      }
      return character
    })
    await Character.insertMany(zizi)
    res.send('theCharacters');
  });
//createdb

app.get('/welcome', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;
app.listen(port, () => console.log(`http://127.0.0.1:${port}/welcome`));

