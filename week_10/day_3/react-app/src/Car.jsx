import React, { Component } from "react";

class Car extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return <h2>Hi, I am a Car! The colour is: {this.state.color} </h2>;
  }
}

export default Car;
