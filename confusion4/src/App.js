import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
//importando a constante


class App extends Component {

  callbackFunction(childData) {
    this.setState({ selectedDish: childData })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>

    );
  }
  //passando a variavel para o componente menu
}
export default App;
