import React from 'react';
import {
  Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}




//é a mesma definição de função do RenderMenuItem, só muda a forma de descrever
const Menu = (props) => {
  //o dishes.js é passado como props para o menucomponent a partir do app.js
  //esses dishes então são preparados em uma constante usando uma função para mapear cada dish a um objeto html
  // o onclick chama a função onDishSelect que define qual foi o dish selecionado
  //então o render chama o renderDish, que renderiza um card específico sempre que o selectedDish != null (que é o estado inicial)
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  //define os cards do menu como uma constante e renderiza abaixo

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    );
  }
}



export default Menu;