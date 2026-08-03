const express = require("express");

const app = express();
const noteroutes = require("./routes/note.routes");
const errorHandler =require("./middleware/error.middle");
app.use(express.json());
app.use("/api",noteroutes);
app.use(errorHandler);
module.exports = app;