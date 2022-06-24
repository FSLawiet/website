import React, { Component } from "react";
import client from "../controller/client";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new: true,
      name: "",
      quarter: "",
      nota_1: 0,
      nota_2: 0,
      nota_3: 0,
      comment: "",
      dataI: undefined,
      dataF: undefined,
      best_results: [],
    };
    this.setName = this.setName.bind(this);
    this.setQuarter = this.setQuarter.bind(this);
    this.setNota_1 = this.setNota_1.bind(this);
    this.setNota_2 = this.setNota_2.bind(this);
    this.setNota_3 = this.setNota_3.bind(this);
    this.setComment = this.setComment.bind(this);
    this.setDataI = this.setDataI.bind(this);
    this.setDataF = this.setDataF.bind(this);
    this.fetchBestResults = this.fetchBestResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchBestResults();
  }

  fetchBestResults() {
    client.get("/api/results?best=true").then((response) => {
      this.setState({ best_results: response.data });
    });
  }

  setName(event) {
    this.setState({ name: event.target.value });
    if (event.target.selectedIndex === 0 || event.target.type === "text") {
      this.setState({ new: true });
    } else {
      this.setState({ new: false });
    }
    console.log(this.state.new);
  }

  setQuarter(event) {
    this.setState({ quarter: event.target.value });
  }

  setNota_1(event) {
    this.setState({ nota_1: event.target.value });
  }
  setNota_2(event) {
    this.setState({ nota_2: event.target.value });
  }
  setNota_3(event) {
    this.setState({ nota_3: event.target.value });
  }
  setComment(event) {
    this.setState({ comment: event.target.value });
  }
  setDataI(event) {
    this.setState({ dataI: event.target.value });
  }
  setDataF(event) {
    this.setState({ dataF: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addData(this.state);
  }

  handleDelete(event) {
    let confirm = window.confirm("Deseja excluir esta nota?");
    if (confirm) {
      client
        .delete("/api/results", { data: { _id: event.target.id } })
        .then((response) => {
          this.props.fetchData();
          this.fetchBestResults();
          alert(response.data);
        });
    }
  }

  addData(state) {
    if (state.new) {
      client
        .post("/api/results", {
          name: state.name,
          quarter: state.quarter,
          grades: [state.nota_1, state.nota_2, state.nota_3],
          comment: state.comment,
          dataI: state.dataI,
          dataF: state.dataF,
        })
        .then((response) => {
          this.props.fetchData();
          this.fetchBestResults();
          alert(response.data);
        });
    } else {
      client
        .put("/api/results", {
          name: state.name,
          quarter: state.quarter,
          grades: [state.nota_1, state.nota_2, state.nota_3],
          comment: state.comment,
          dataI: state.dataI,
          dataF: state.dataF,
        })
        .then((response) => {
          this.props.fetchData();
          this.fetchBestResults();
          alert(response.data);
        });
    }
  }

  render() {
    return (
      <section id="results">
        <div className="headline">NOSSOS RESULTADOS</div>
        <div id="results-container">
          <div id="results-cards">
            {this.state.best_results.map((result, index) => {
              let tempo;
              if (result.time === 1) tempo = `${result.time} minuto`;
              else tempo = `${result.time} minutos`;

              return (
                <div className="results-card">
                  <p>{index + 1}º</p>
                  <h1>{result.average}</h1>
                  <p>
                    {result.student_name} - {result.quarter}º Bimestre
                  </p>
                  <p>
                    {result.grades[0]}, {result.grades[1]}, {result.grades[2]}
                  </p>
                  <q>{result.comment}</q>
                  <p>Completado em {tempo}</p>
                  <a
                    onClick={this.handleDelete}
                    id={result.student_id}
                    class="btn"
                  >
                    <i className="fas fa-solid fa-trash"></i>
                  </a>
                </div>
              );
            })}
          </div>
          <div id="results-form">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Aluno</legend>
                <label htmlFor="name">Nome:</label>
                <select id="name" name="name" onChange={this.setName}>
                  <option id="new" value="">
                    ***Novo Aluno***
                  </option>
                  {this.props.data.map((entry) => {
                    return (
                      <option id="mod" value={entry.student_name}>
                        {entry.student_name}
                      </option>
                    );
                  })}
                </select>
                <br />
                <input
                  type="text"
                  value={this.state.name}
                  id="new_name"
                  placeholder="Digite o nome da(o) aluna(o)"
                  name="name"
                  onChange={this.setName}
                />
              </fieldset>
              <fieldset>
                <legend>Notas das Provas</legend>
                <div id="qbox">
                  <input
                    type="radio"
                    id="q1"
                    className="q"
                    name="quarter"
                    value="1"
                    onChange={this.setQuarter}
                  />
                  <label htmlFor="q1">1º Bimestre</label>
                  <input
                    type="radio"
                    id="q2"
                    className="q"
                    name="quarter"
                    value="2"
                    onChange={this.setQuarter}
                  />
                  <label htmlFor="q2">2º Bimestre</label>
                  <input
                    type="radio"
                    id="q3"
                    className="q"
                    name="quarter"
                    value="3"
                    onChange={this.setQuarter}
                  />
                  <label htmlFor="q3">3º Bimestre</label>
                  <input
                    type="radio"
                    id="q4"
                    className="q"
                    name="quarter"
                    value="4"
                    onChange={this.setQuarter}
                  />
                  <label htmlFor="q4">4º Bimestre</label>
                </div>
                <label htmlFor="nota1">Nota 1:</label>
                <input
                  type="number"
                  id="nota1"
                  name="grade1"
                  min="0"
                  max="10"
                  step="0.1"
                  onChange={this.setNota_1}
                ></input>
                <br />
                <label htmlFor="nota2">Nota 2:</label>
                <input
                  type="number"
                  id="nota2"
                  name="grade2"
                  min="0"
                  max="10"
                  step="0.1"
                  onChange={this.setNota_2}
                ></input>
                <br />
                <label htmlFor="nota3">Nota 3:</label>
                <input
                  type="number"
                  id="nota3"
                  name="grade3"
                  min="0"
                  max="10"
                  step="0.1"
                  onChange={this.setNota_3}
                ></input>
                <br />
                <label htmlFor="comment">Comentário:</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="10"
                  cols="30"
                  onChange={this.setComment}
                ></textarea>
              </fieldset>
              <fieldset>
                <legend>Tempo de Prova</legend>
                <label htmlFor="data_inicio">Data de Início:</label>
                <input
                  type="datetime-local"
                  id="data_inicio"
                  name="dateI"
                  onChange={this.setDataI}
                ></input>
                <br />
                <label htmlFor="data_fim">Data de Término:</label>
                <input
                  type="datetime-local"
                  id="data_fim"
                  name="dateF"
                  onChange={this.setDataF}
                ></input>
              </fieldset>
              <div id="btnbox">
                <input className="btn" type="reset" value="Limpar campos" />
                <input className="btn" type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Results;
