const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const path = require("path");
const uuid = require("uuid");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");

const app = express();
const PORT = process.env.PORT || 3000;

const htmlRoutes = require("./routes/htmlR.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
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


