import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    axios.post('users', data)
      .then(
      res => {
        localStorage.setItem('token', res.token);
      })
      .catch(
      err => {
        console.log(err);
      })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <h3>Cadastre-se</h3>

        <div className="form-group">
          <label>Nome: </label>
          <input type="text" className="form-control" placeholder="Nome"
            onChange={e => this.name = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Email: </label>
          <input type="email" className="form-control" placeholder="Email"
          onChange={e => this.email = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Senha: </label>
          <input type="password" className="form-control" placeholder="Senha"
            onChange={e => this.password = e.target.value}
          />
        </div>

        <button className="btn btn-primary btn-block">Salvar</button>

      </form>
    )
  }
}