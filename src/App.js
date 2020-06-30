import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
//importando a constante


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
      //definindo a variavel para a constante importada
    };
  }

  render(){
  return (
    
    <div>
      <Navbar dark color = "primary">    
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>  
        </div> 
      </Navbar>
      <Menu dishes = {this.state.dishes}/>
    </div>
  );
}
//passando a variavel para o componente menu
}
export default App;
