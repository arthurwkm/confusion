import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishDetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';
//importando a constante


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
      //definindo a variavel para a constante importada
    };
  }

  callbackFunction = (childData) =>{
    this.setState({selectedDish: childData})
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
      {/* <Menu dishes = {this.state.dishes} parentCallback = {this.callbackFunction}/> */}
      {/* <DishDetail dish = {this.state.selectedDish}/> */}
    </div>
  );
}
//passando a variavel para o componente menu
}
export default App;
