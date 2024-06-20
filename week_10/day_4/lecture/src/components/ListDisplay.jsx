import "./ListDisplay.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default class ListDisplay extends React.Component {
  constructor(props) {
    super(props);

    // Step 1: Break down items into groups of 4
    const listOfGroups = [];
    const groupSize = 4;
    for (let i = 0; i < props.list.length; i += groupSize) {
      listOfGroups.push(props.list.slice(i, i + groupSize));
    }
    console.log(listOfGroups);

    // console.log(`List of groups of ${groupSize}: `);
    // console.log(listOfGroups);

    this.state = { listOfGroups };
  }

  render() {
    return (
      <>
        <Container>
          {this.state.listOfGroups.map((group, groupIndex) => {
            return (
              // Step 2: For each group of items/list, create a <Row></Row>
              <Row key={groupIndex} style={{ marginTop: "1rem" }}>
                {group.map((car, carIndex) => {
                  return (
                    // Step 3: For each item within the list, create a <Col></Col>
                    <Col key={carIndex}>
                      <Card style={{ width: "18rem" }}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Brand: {car.brand}</ListGroup.Item>
                          <ListGroup.Item>Name: {car.name}</ListGroup.Item>
                          <ListGroup.Item>Year: {car.year}</ListGroup.Item>
                          <ListGroup.Item>Origin: {car.origin}</ListGroup.Item>
                          {/* <ListGroup.Item>
                            Sdfkjshdkfjhsdfsdf:{" "}
                            {
                              car.origin.sdfkjshdkfjhsdfsdf
                                .dflgjdlkfgjlfdjglkfjdk
                            }
                          </ListGroup.Item> */}
                        </ListGroup>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Container>
      </>
    );
  }
}
