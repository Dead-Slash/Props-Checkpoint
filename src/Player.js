import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Players from "./players";
import Col from "react-bootstrap/Col";

function Player(props) {
  console.log(props);
  return (
    <Col md={3} sm={6} className="mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.user.image}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{props.user.name} </Card.Title>
          <Card.Text>Team: {props.user.team}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nationality{props.user.nationality} </ListGroup.Item>
          <ListGroup.Item>
            Jersey number:{props.user.jerseyNumber}{" "}
          </ListGroup.Item>
          <ListGroup.Item>Age :{props.user.age} </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default Player;
