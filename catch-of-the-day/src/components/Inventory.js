import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component {
  render() {
    // reference a method as a prop as below.
    // Method was passed in to inventory as a prop from App
    return (
    <div className="inventory"> 
      <h2>Inventory</h2>
      <AddFishForm addFish={this.props.addFish} />
      <button onClick={this.props.loadSampleFishes}>Load samples</button>
    </div>
    )
  }
}

export default Inventory;
