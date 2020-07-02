import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
//importando a constante


class App extends Component {

  callbackFunction(childData){
    this.setState({selectedDish: childData})
  }

  render(){
  return (
    
    <div>
      <Main/>
    </div>
  );
}
//passando a variavel para o componente menu
}
export default App;
