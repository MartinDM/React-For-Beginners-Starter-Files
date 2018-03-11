import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from '../base'

class App extends React.Component {
  
  // Set the state
  state = {
    fishes : {},
    order: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
    console.log('loaded samples')
  };

  addToOrder = (key) => {
    console.log('added', key)
    // copy state
    const order = { ...this.state.order };
    // add to order or update number in order
    order[key] = order[key] + 1 || 1; 
    // setstate to update
    this.setState({ order }) 
  };

  // define a method here to pass into a prop later
  addFish = fish => {
    console.log('adding fish')
    // NOPE this.state.fishes.fish1 = fish

    /* Updating state properly **
       1. Copy state using spread
    */
   const fishes = {...this.state.fishes}

   // 2. add the new fish. Fish is the object passed in.
   fishes[`fish${Date.now()}`] = fish;
   // 3. update state with new fishes

   // Adds our new fish to state. Triggers render.
    this.setState({
     // fishes: fishes
     // Shortened because prop and value are the same:
      fishes 
    })
    // Only updates the 'pieces' of state.
  };
 

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
          <ul className="fishes">
           { Object.keys(this.state.fishes).map( (key) => <Fish 
              key={key} 
              index={key}
              addToOrder={this.addToOrder} 
              details={this.state.fishes[key]} 
            />)} 
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
