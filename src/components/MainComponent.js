import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
      //definindo a variavel para a constante importada
    };
  }

  

  render(){

    const HomePage = () => {
      return(
        <Home/>
      );
    }
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        {/* se nenhuma route der match vá para o redirect */}
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}
//passando a variavel para o componente menu
}
export default Main;
