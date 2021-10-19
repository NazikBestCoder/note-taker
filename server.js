const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const path = require("path");
const uuid = require("uuid");

const app = express();
const PORT = process.env.PORT || 4000;

// const htmlRoutes = require("./routes/htmlR.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/", htmlRoutes);
// Connect API Routes
// Saves notesinto db.json
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});
// Add notes
app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});
// Deletes notes
app.delete("/api/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
  res.json(delNote);
});
// Index.html call
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// Notes.html call
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;

// const htmlRoutes = require("./routes/htmlR.js");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use("/", htmlRoutes);

// app.listen(PORT, () => {
//     console.log(`listening on ${PORT}`)
// });
