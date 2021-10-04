import React, { Component } from "react";
import "./Box.css";
class Box extends Component {
  render() {
    return (
      <div className="Box-layout">
        <div
          className="Box"
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
          }}
        />

        <button className="Box-btn" onClick={this.props.removeBox}>
          X
        </button>
      </div>
    );
  }
}

export default Box;
// to get a Box to render in Boxlist
//`${}` to pass in variable's value to string
