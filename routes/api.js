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
};
