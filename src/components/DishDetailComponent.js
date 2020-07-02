import React, { Component, List, ListItem } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



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


function RenderComments(props) {
  if (props.dish != null) {
    return (
      <div class="container">
        <h4>Comments:</h4>
        <ul className="list-group">
          <div>
            {
              props.dish.comments.map(function (com) {
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
        <div className="col-md-5">
          <RenderDish dish={props.dish} />

        </div>
        <div className="col-md-5">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
}

export default DishDetail;