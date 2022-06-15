"use strict";
const Business = require("../components/business");
const { StudentModel, ResultModel } = require("./models");
require("./connection");

module.exports = (app) => {
  app
    .route("/api/results")
    .post((req, res) => {})
    .get((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});

  app.get("/api/test", (req, res) => {
    res.send({
      express:
        "Estou mandando mensagem do Backend em Express para o Frontend em React!",
    });
  });
};
