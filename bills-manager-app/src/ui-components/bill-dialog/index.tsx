import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function Bill({
  title = "Test title",
  description = "Some description",
  amount = 100.0,
  date = "28/11/2019",
}) {
  return (
    <div className="bill-dialog">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{`Amount: $${amount}`}</ListGroupItem>
          <ListGroupItem>{`Date: ${date}`}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
