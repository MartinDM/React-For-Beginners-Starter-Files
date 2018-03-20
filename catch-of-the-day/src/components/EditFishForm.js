import React from 'react'
class EditFishForm extends React.Component {
    
// Not allowed to have state editable in an input field
handleChange = (e) => { 
    // update fish 
    const updatedFish = {
        // The fish being updated, plus the value to set it to.
        // Uses 'computed property' name
        ...this.props.fish,
        [e.currentTarget.name] : e.currentTarget.value // select property by name of the currentTarget
    }
    console.log(updatedFish);
    // Passing in an updated object to the correct key/index in state. PAssing it 'up' to App state
    this.props.updateFish(this.props.index, updatedFish)
}
render() { 
    return (
        <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh today!</option>
                <option value="unavailable">Sold out</option>
            </select>
            <textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}  />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    )
  }
}

export default EditFishForm;