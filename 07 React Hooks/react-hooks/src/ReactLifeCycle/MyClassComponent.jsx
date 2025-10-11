import React, { Component } from "react";

export default class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ constructor :Intial Setup ");
  }
  componentDidMount() {
    console.log("3️⃣componentDidMount :Component added to Dom First time ");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("4️⃣componentDidUpdate :State/props Change ", prevState);
  }
  componentWillUnmount() {
    console.log("5️⃣componentWillUnmount :Component removed from DOM ");
  }
  render() {
    console.log("2️⃣ Render : UI Render ");
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add by 1
        </button>
      </div>
    );
  }
}
