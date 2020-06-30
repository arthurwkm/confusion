import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
    console.log('MenuComponent constructor is invoked')
  }

  onDishSelect(dish) {
    this.props.parentCallback(dish);
  }

  // renderDish(dish){
  //   if(dish != null){
  //     return(
  //       <Card>
  //         <CardImg width="100%" src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   }else{
  //     return(
  //       <div></div>
  //     );
  //   }
  // }
  componentDidMount(){
    console.log('MenuComponent componentDidMount is invoked')
  }
  render() {
    console.log('MenuComponent render is invoked')
    //o dishes.js é passado como props para o menucomponent a partir do app.js
    //esses dishes então são preparados em uma constante usando uma função para mapear cada dish a um objeto html
    // o onclick chama a função onDishSelect que define qual foi o dish selecionado
    //então o render chama o renderDish, que renderiza um card específico sempre que o selectedDish != null (que é o estado inicial)
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    //define os cards do menu como uma constante e renderiza abaixo
  

    return (
      <div className="container">
        <div className="row">

          {menu}

        </div>
        {/* <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div> */}
      </div>
    );
  }
}

export default Menu;