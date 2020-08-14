import React, { Component, List, ListItem } from 'react';
import {
  Breadcrumb, BreadcrumbItem, Card, CardImg,
  CardImgOverlay, CardText, CardBody, CardTitle,
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
  Label, Input, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmitComment(values) {
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
  }

  render() {
    return (
      <div className="container">
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
              <Row className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" name="rating"
                  className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                  className="form-control"
                  validators={{
                    minLength: minLength(3), maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea model=".comment" id="comment" name="comment"
                  rows="12"
                  className="form-control" />
              </Row>

              <Button className="pl-10" type="submit" value="submit" color="primary">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


function RenderDish(props) {
  if (props.dish != null) {
    return (
      <div>
        <Card>
          <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name} />
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


function RenderComments({ comments, addComment, dishId }) {
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
        <CommentsForm addComment={addComment} dishId={dishId} />
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function DishDetail(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
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
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id} />
        </div>
      </div>
    );
  }
}

export default DishDetail;