require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Character = require("./model/character.js");

const app = express();
app.use(express.json());

app.get("/api/characters", async (req, res) => {
  const response = await Character.find();
  res.send(response);
});

app.post("/api/character/:id", async (req, res) => {
  const killCharacter = req.params.id;
  console.log(killCharacter);
  await Character.findOneAndUpdate({ name: killCharacter }, { isAlive: false });
  res.sendStatus(200);
});

app.delete(`/api/dragonfire/:id`, async (req, res) => {
  const dragonfireCharacter = req.params.id;
  //await Character.findByIdAndDelete(dragonfireCharacter)
  console.log(dragonfireCharacter + "is killed");
  res.sendStatus(200);
});

app.post("/api/council/:id", async (req, res) => {
  const addToCouncil = req.params.id;
  console.log(addToCouncil);
  await Character.findOneAndUpdate(
    { name: addToCouncil },
    { councilMember: true }
  );
  res.sendStatus(200);
});

app.patch("/api/graveyard", async (req, res) => {
  await Character.findByIdAndUpdate(
    { _id: req.query.ressurectCharacterId },
    { isAlive: true }
  );
});

app.post("/api/child", async (req, res) => {
  const child = req.body;
  await Character.create(child);

  res.sendStatus(200);
});

app.get("/welcome", (req, res) => {
  res.send("Hello World!");
});

const port = 5000;

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`http://127.0.0.1:${port}/welcome`));
};

main().catch((err) => console.error(err));
