const express = require("express");

const app = express();
const noteroutes = require("./routes/note.routes");
app.use(express.json());
app.use("/api",noteroutes);
module.exports = app;