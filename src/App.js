import React, { Component } from 'react';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          id: '',
          title: '',
          price: '',
          desc: '',
          image: ''
      },
    };
  }

 //handleSubmit () {
  handleSubmit = () => {
    this.setState({imageClick : this.state.onClick}
 //imageClick = () => {this.state.image
  fetch('https://fakestoreapi.com/product', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => console.log(res))
   .catch (error => console.log('ERROR'))
    )}
  
    render() {
      
      return ( 
        <div className="App">               
         <Home />
         <Checkout onClick={this.onClick} />
         <Logo />
        </div>
      );
    }
  } 
