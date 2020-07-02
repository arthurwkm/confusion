import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
      //definindo a variavel para a constante importada
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  render(){
  return (
    
    <div>
      <Navbar dark color = "primary">    
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>  
        </div> 
      </Navbar>
      <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
      {/* manda para o menu uma função que recebe o parametro dishId e executa a função this.onDishSelect(dishId)
      que vai mudar o state de MainComponent a partir do MenuComponent (callback function)      */}
      <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
}
//passando a variavel para o componente menu
}
export default Main;
