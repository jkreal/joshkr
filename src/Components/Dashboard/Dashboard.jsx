import React, { Component } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Container className="dashboard">
        <Row>
            <Col><Header /></Col>
        </Row>
        <Row>
            <Col md lg="3"><Sidebar /></Col>
            <Col md lg="9"><Content /></Col>
        </Row>
        <Row>
            <Footer />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
