import React, { Component } from "react";

class ShowOtherAdviceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="Advice-other-advice-button"
        onClick={this.props.onClick}
      >
        Show other advice
      </button>
    );
  }
}

export default ShowOtherAdviceButton;
