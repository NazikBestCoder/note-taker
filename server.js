const express = require("express");
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


