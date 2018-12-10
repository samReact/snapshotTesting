import React, { Component } from "react";
import "./App.css";
import ShowOtherAdviceButton from "./\u001BShowOtherAdviceButton\u001B";

class App extends Component {
  state = {
    advice: ""
  };

  loadAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const {
      slip: { advice }
    } = await response.json();
    this.setState({ advice });
  };

  async componentDidMount() {
    await this.loadAdvice();
  }

  render() {
    return (
      <div className="App">
        <p className="Advice">{this.state.advice || "…"}</p>
        <ShowOtherAdviceButton onClick={this.loadAdvice} />
      </div>
    );
  }
}

export default App;
