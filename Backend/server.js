const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoute = require("./controller/route");

mongoose.connect('mongodb://127.0.0.1:27017/CRMStock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => {
  console.log("Error occurred");
});
db.once('open', () => console.log("Connected to local database"));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/crm', studentRoute);
app.listen(8000, () => console.log("Server started at 8000"));