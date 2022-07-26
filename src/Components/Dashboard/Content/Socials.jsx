import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Socials extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Row>
        <Col>
          <h1 className="content-header">Socials</h1>
        </Col>
      </Row>
    );
  }
}

export default Socials;
