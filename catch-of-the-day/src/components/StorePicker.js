import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef(); // blank ref. Assigned in render.

  // Runs before component created.
  // Binds our own methods to the components
  constructor(){
    super();
   // this.goToStore = this.goToStore.bind(this)
   }

  // Function defined as a class/method. Allows use of 'this' inside the method.
  // GoToStore becomes an arrow function definition:
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.value.value; 
    // 3. Change the page to /store/custom-shop
      // getting text from input. Don't touch the DOM.
      // Get it from reference
    this.props.history.push(`/store/${storeName}`)
  }; 

  // Built-in methods are already bound to Component/this
  componentDidMount(){ 
    //console.log(this, 'mounted')
  }

  render() {
    // Store picker component 
    console.log(this)
    return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter A Store</h2> 
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
