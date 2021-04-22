
import React, { Component } from "react";

export default class Home extends Component {

  render() {
    if(this.props.user) {
      return (
        <h2> Seja bem vindo {this.props.user.name} </h2>
      )
    }
    return (
      <h2>Home</h2>
    )
  }
}