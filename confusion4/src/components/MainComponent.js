import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDish: null
      //definindo a variavel para a constante importada
    };
  }

  

  render(){

    const HomePage = () => {
      return(
        <Home  dish={this.state.dishes.filter((dish) => dish.featured === true)[0]}
        promo={this.state.promotions.filter((promo) => promo.featured === true)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured === true)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        {/* se nenhuma route der match vá para o redirect */}
        <Route path = "/menu/:dishId" component = {DishWithId}/>
        <Route exact path="/contactus" component={() => <Contact/>} />
        <Route exact path="/aboutus" component={() => <About leaders = {this.state.leaders}/>} /> 
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  ); 
}
//passando a variavel para o componente menu
}
export default Main;
