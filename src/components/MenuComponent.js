import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';


function RenderMenuItem(props) {
  return (
    <Card onClick={() => props.onClick(props.dish.id)}>
      <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
      <CardImgOverlay body className="ml-5">
        <CardTitle>{props.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}




//é a mesma definição de função do RenderMenuItem, só muda a forma de descrever
const Menu = (props) => {
  //o dishes.js é passado como props para o menucomponent a partir do app.js
//esses dishes então são preparados em uma constante usando uma função para mapear cada dish a um objeto html
// o onclick chama a função onDishSelect que define qual foi o dish selecionado
//então o render chama o renderDish, que renderiza um card específico sempre que o selectedDish != null (que é o estado inicial)
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish = {dish} onClick = {props.onClick}/>
      </div>
    );
  });
  //define os cards do menu como uma constante e renderiza abaixo
  
  
  return (
    <div className="container">
      <div className="row">
  
        {menu}
  
      </div>
      <div>
        <DishDetail dish={props.selectedDish} />
      </div>
  
    </div>
  );
}

  

export default Menu;