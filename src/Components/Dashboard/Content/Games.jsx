import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Games extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Row>
        <Col>
          <h1 className="content-header">Games</h1>
        </Col>
      </Row>
    );
  }
}

export default Games;
