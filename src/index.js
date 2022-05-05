import React from "react";
import { render } from "react-dom";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 6;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ random: this.state.random + rand });
    console.log(rand);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">React Random Number Generator</h3>
          <p>
            Simple example for this question in Stackoverflow:{" "}
            <a
              href="https://stackoverflow.com/questions/45175836/random-number-using-react-js"
              target="_blank"
            >
              https://stackoverflow.com/questions/45175836/random-number-using-react-js
            </a>
          </p>
          <button
            className="btn btn-primary"
            onClick={this.handleClick.bind(this)}
          >
            Click
          </button>
          <div className="card" style={{ marginTop: "10px" }}>
            <div className="card-block">The number is: {this.state.random}</div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Button />, document.getElementById("container"));
