import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./Boxlist.css";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.createNewBox = this.createNewBox.bind(this);
  }
  /*remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }*/
  createNewBox(newBox) {
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id != id)
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={() => this.remove(box.id)} //dont have to bind this.remove in constructor
      />
    ));
    return (
      <div className="Boxlist">
        <h1>Color Box Maker </h1>
        <NewBoxForm createBox={this.createNewBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
