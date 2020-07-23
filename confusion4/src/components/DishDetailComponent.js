import React, { Component, List, ListItem } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish(props) {
  if (props.dish != null) {
    return (
      <div>
        <Card>
          <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
          <CardBody>
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}


function RenderComments({comments}) {
  if (comments != null) {
    return (
      <div class="container">
        <h4>Comments:</h4>
        <ul className="list-group">
          <div>
            {
              comments.map(function (com) {
                console.log(com.author);
                return (
                  <div>
                    <li className="list-group-item">
                      {com.comment}
                    </li>
                    <li className="list-group-item">
                      {"-- " + com.author + ", " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}
                    </li>
                  </div>
                );
              })
            }
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function DishDetail(props) {
  console.log("render")
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>

      <div className="col-md-5">
        <RenderDish dish={props.dish} />

      </div>
      <div className="col-md-5">
        <RenderComments dish={props.comments} />
      </div>

    </div>
  );
}

export default DishDetail;