import React, { Component } from "react";
import { Card } from "react-bootstrap";

class PeopleCard extends Component {
  render() {
    let { name, company, description, src } = this.props.person;
    return (
      <div>
        <Card style={{ height: "28rem", borderRadius: "10px" }}>
          <Card.Img
            variant="top"
            src={src}
            alt="Card image cap"
            style={{ height: "15rem" }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{company}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PeopleCard;
