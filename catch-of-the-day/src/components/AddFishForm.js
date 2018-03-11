import React from "react";

class AddFishForm extends React.Component {
  
  // Empty Refs to put values into
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef(); 

  createFish = (e) => {
    e.preventDefault();
    // console.log('making fish');
    // Getting values out of the form
   const fish = {
     nameRef: this.nameRef.value.value,
     priceRef: parseFloat(this.priceRef.value.value), // Get an integer!
     statusRef: this.statusRef.value.value,
     descRef: this.descRef.value.value,
     imageRef: this.imageRef.value.value
    }
    this.props.addFish(fish);
    // Reset form
    e.currentTarget.reset();
  }

  render() {
    return (
    <form className="fish-edit" onSubmit={this.createFish}>
      <input name="name" ref={this.nameRef} type="text" placeholder="name"/>
      <input name="price" ref={this.priceRef} type="text" placeholder="price"/>
      <select name="status" ref={this.statusRef}>
        <option value="available">Fresh today!</option>
        <option value="unavailable">Sold out</option>
      </select>
      <textarea name="desc" ref={this.descRef}  placeholder="desc"/>
      <input name="image"  ref={this.imageRef} type="text" placeholder="image"/>
      <button type="submit">Add fish</button>
    </form>
    )  
  }
}

export default AddFishForm;