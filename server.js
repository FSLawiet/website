"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routing for API
apiRoutes(app);

app.use(function (req, res, next) {
  res.status(404).type("text").send("Página não encontrada.");
});

const listener = app.listen(port, function () {
  console.log(
    "O aplicativo está escutando pela porta " + listener.address().port
  );
});
