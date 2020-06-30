import React, { Component, List, ListItem } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
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

  renderComments(dish) {
    if (dish != null) {
      return (
        <div>
          <h4>Comments:</h4>
          <ul className = "list-group"> 
            <div>
            {
              dish.comments.map(function (com) {
                console.log(com.author);
                return (
                  <div>
                    <li className="list-group-item">
                      {com.comment}
                    </li>
                    <li className="list-group-item">
                      {"-- " + com.author +", "+ com.date}
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-md-5">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;