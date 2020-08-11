import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }   
}
//O ( ) É PQ É UM OBJETO JS NAO UMA FUNÇÃO
const mapDispatchToProps = (dispatch) => ({
  //criando atributo chamado addComment que é um dispatch que tem como argumento o objeto ação criado pela função addComment de actioncreators
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {

  constructor(props){
    super(props);
   
  }

  

  render(){

    const HomePage = () => {
      return(
        <Home  dish={this.props.dishes.filter((dish) => dish.featured === true)[0]}
        promo={this.props.promotions.filter((promo) => promo.featured === true)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured === true)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment} />
      );
    };

  return (
    
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
        {/* se nenhuma route der match vá para o redirect */}
        <Route path = "/menu/:dishId" component = {DishWithId}/>
        <Route exact path="/contactus" component={() => <Contact/>} />
        <Route exact path="/aboutus" component={() => <About leaders = {this.props.leaders}/>} /> 
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  ); 
}
//passando a variavel para o componente menu
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
