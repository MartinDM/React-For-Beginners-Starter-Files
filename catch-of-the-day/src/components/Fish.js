import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    
 handleClick = () => {
    // Use the index prop and addToOrder function prop (also passed in to Fish) to identify the fish being added
    
 }

  render() {
    // const img = this.props.details.image;
    // const name = this.props.details.name;

    // Destructuring!
    const { image, name, desc, price, status } = this.props.details;
    const isAvailable = status === 'available';
    const btnText = (!isAvailable ? 'Sold out' : 'Add to basket');
    return (
        <li className="menu-fish">
            <img src={image} alt={name} />
            <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
            </h3> 
            <p>{desc}</p>
            <button onClick={ () => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>{btnText}</button>
        </li>
    )
  }
}

export default Fish;
