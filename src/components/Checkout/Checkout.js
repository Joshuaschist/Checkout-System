import React, { Component } from 'react';
import './Checkout.css';
import checkout from './Checkout.jpg';

export default class Checkout extends Component {
  imageClick = () => {
    console.log('Click!!!');
  }
  render () {
  return (
    <div className="Checkout">
      <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
          <h1 className="mt0">click on ⬇⬇</h1>
        <div id="source">
          <img id="descriptionimg" src={checkout} onClick={this.imageClick} alt='' title='Checkout'  />
        </div>
      </section>
    </div>
  );
}
}
