import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

  // Apply key props to each item in the state for quick access for React
  // Split out the building of the Order list
  
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available'; 
    if(!fish){  return null }

    if (!isAvailable){
     return (
       <CSSTransition 
          classNames="order" 
          key={key} 
          timeout={{enter: 500, exit: 500 }}
        >
        <li key={key}>
        Oops! { fish ? fish.name : 'fish' } is not available
        </li>
       </CSSTransition>
     )}

    return (
      <CSSTransition 
          classNames="order" 
          key={key} 
          timeout={{enter: 500, exit: 500 }}>
        <li key={key}>
        {count} lbs {fish.name}
        { formatPrice(count * fish.price)}
        <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
        </li>
      </CSSTransition>
    )}

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce( ( prevTotal, key ) => { 
      const fish = this.props.fishes[key];
      const count = this.props.order[key]; 
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price )
      }
      return prevTotal
    }, 0);

    return <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order"> 
          { orderIds.map(this.renderOrder) }
      </TransitionGroup>
      <div className="total">
        <strong>{ formatPrice(total) }</strong>
      </div> 
    </div>;
  }
}

export default Order;
