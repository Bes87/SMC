import React from 'react';
import { Card } from 'react-bootstrap';
import './serviceCard.css';

class ServicesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <Card style={{minHeight: "100%"}}>
            <Card.Img className="img-thumbnail" variant="top" src={this.props.item.img} />
            <Card.Body>
              <Card.Title className="card-title">{this.props.item.title}</Card.Title>
              <Card.Text className="card-content">
                {this.props.item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
    }
}

export default ServicesCard;