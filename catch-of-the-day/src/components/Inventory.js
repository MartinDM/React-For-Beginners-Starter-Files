import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from './EditFishForm'

class Inventory extends React.Component {
  render() {
    // reference a method as a prop as below.
    // Method was passed in to inventory as a prop from App
    return (
      <div className="inventory"> 
        <h2>Inventory</h2>
        { /* this.props.fish is an object */ }
        { Object.keys(this.props.fishes).map( key => (
          <EditFishForm key={key} index={key} fish={this.props.fishes[key] } deleteFish={this.props.deleteFish} updateFish={this.props.updateFish} /> 
        ))} 
        <AddFishForm addFish={this.props.addFish} editFish={this.props.fishes}  /> 
        <button onClick={this.props.loadSampleFishes}>Load samples</button>
      </div>
    )
  }
}

export default Inventory;
