import React, { Component } from "react";
import "./Dashboard.css";
import { Sidebar, SidebarButton } from "./Sidebar";
import { Header }from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { mobileView: 0, showSidebar: false };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    this.updateViewState();
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.updateViewState();
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  updateViewState() {
    let xwidth = document.documentElement.clientWidth;
    let yheight = document.documentElement.clientHeight;
    console.log("the viewport is " + xwidth + "px by " + yheight + "px");

    // Phone in portrait mode
    if (xwidth < 600) {
      this.setState({
        mobileView: 0,
        showSidebar: false,
      });
      // Phone in Landscape mode
    } else if (xwidth > 600 && xwidth < 1000 && yheight < 500) {
      this.setState({
        mobileView: 1,
        showSidebar: false,
      });
      //iPad/Tablet in portrait mode
    } else if (xwidth > 600 && xwidth < 1000 && yheight > 500) {
      this.setState({
        mobileView: 2,
        showSidebar: true,
      });
      //iPad/Tablet in Landscape mode
    } else if (xwidth > 992 && yheight < 992) {
      this.setState({
        mobileView: 3,
        showSidebar: true,
      });
      // Desktop/Laptop Sub 1080p
    } else if (
      xwidth > 1000 &&
      xwidth < 1900 &&
      yheight > 700 &&
      yheight < 1200
    ) {
      this.setState({
        mobileView: 4,
        showSidebar: true,
      });
      // Desktop/Laptop 1080p
    } else if (xwidth > 1901 && xwidth < 2500) {
      this.setState({
        mobileView: 5,
        showSidebar: true,
      });
      //2k and above
    } else {
      this.setState({
        mobileView: 6,
        showSidebar: true,
      });
    }
  }

  render() {
    return (
      <Container fluid className="dashboard">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>{/* Navbar */}</Row>
        <Row>
          <Col>
            {this.state.showSidebar ? (
              <Sidebar toggle={this.toggleSidebar} />
            ) : (
              <SidebarButton toggle={this.toggleSidebar} />
            )}
          </Col>
          <Col>
            <Content />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
