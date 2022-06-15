"use strict";
require("dotenv").config();
const express = require("express");
const apiRoutes = require("./routes/api");
const app = express();

//Public assets folder
app.use("/public", express.static(process.cwd() + "/public"));

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

//Routing for API
apiRoutes(app);

app.use(function (req, res, next) {
  res.status(404).type("text").send("Página não encontrada.");
});

const listener = app.listen(3000, function () {
  console.log(
    "O aplicativo está escutando pela porta " + listener.address().port
  );
});
