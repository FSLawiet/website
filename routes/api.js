"use strict";
const Business = require("../components/business");
const { StudentModel, ResultModel } = require("./models");
require("./connection");

module.exports = (app) => {
  app
    .route("/api/results")
    .post((req, res) => {
      console.log(req.body);
      const { name, comment } = req.body;
      const quarter = parseInt(req.body.quarter);
      const grades = req.body.grades.map((x) => parseFloat(x));
      const dates = [new Date(req.body.dataI), new Date(req.body.dataF)];

      const average = Business.average(grades[0], grades[1], grades[2]);
      const time_delta = Business.time_delta(
        dates[0].getHours(),
        dates[0].getMinutes(),
        dates[1].getHours(),
        dates[1].getMinutes()
      );

      /*Checagens de parâmetros*/
      if (average > 10 || average < 0) {
        res.send("Notas Inválidas");
        return;
      }

      if (time_delta > 180 || time_delta < 0) {
        res.send("Datas Inválidas");
        return;
      }

      const index = (7 * average + 3 * (1 / time_delta)) / 10;

      const newResult = new ResultModel({
        quarter: quarter,
        grades: grades,
        time: dates,
        comment: comment,
        index: index,
      });

      const newStudent = new StudentModel({ name: name });
      newStudent.results.push(newResult);

      newStudent.save((err, data) => {
        if (err || !data) {
          res.send("Erro ao cadastrar aluno");
        } else {
          console.log(newStudent);
          res.send(
            "Cadastro da(o) " + newStudent.name + " concluído com sucesso!"
          );
        }
      });
    })
    .get((req, res) => {
      if (req.query.best) {
        //TODO
      } else {
        StudentModel.find((err, data) => {
          if (err || !data) {
            console.log(err);
          } else {
            //console.log("Lista de alunos:", data);
            let results = [];
            for (let i = 0; i < data.length; i++) {
              let name = data[i].name;
              let _id = data[i]._id;

              for (let j = 0; j < data[i].results.length; j++) {
                let is_approved =
                  data[i].results[j].index.toFixed(1) >= 42 ? true : false;

                results.push({
                  student_id: _id,
                  student_name: name,
                  quarter: data[i].results[j].quarter,
                  grades: data[i].results[j].grades,
                  average: Business.average(
                    data[i].results[j].grades[0],
                    data[i].results[j].grades[1],
                    data[i].results[j].grades[2]
                  ),
                  time: Business.time_delta(
                    data[i].results[j].time[0].getHours(),
                    data[i].results[j].time[0].getMinutes(),
                    data[i].results[j].time[1].getHours(),
                    data[i].results[j].time[1].getMinutes()
                  ),
                  comment: data[i].results[j].comment,
                  index: data[i].results[j].index,
                  is_approved: is_approved,
                });
              }
            }
            console.log(results);
            res.json(results);
          }
        });
      }
    })
    .put((req, res) => {
      console.log(req.body);
      const { name, quarter } = req.body;
      res.send("Cadastro da(o) " + name + " alterado com sucesso!");
    })
    .delete((req, res) => {});

  app.get("/api/test", (req, res) => {
    res.send({
      express:
        "Estou mandando mensagem do Backend em Express para o Frontend em React!",
    });
  });
};
