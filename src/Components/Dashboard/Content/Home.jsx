import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import cat from "../../../Assets/Pics/cat-gray.gif"

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <div>
        <Row>
            <Col>
                <h1 className="content-header">Home</h1>
                <img src={cat} alt="cat at work" className="image"/>
                <p>This profile of mine is currently under construction. Check back later for more updates!</p>
            </Col>
        </Row>
    </div>;
  }
}

export default Home;
