import React, { Component } from "react";
import "./Dashboard.css";
import "./DashboardQueries.css";
import { Sidebar, SidebarButton } from "./Sidebar";
import { Header } from "./Header";
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
    console.log(
      "the viewport is " +
        xwidth +
        "px by " +
        yheight +
        "px, resulting in mobileView: " +
        this.state.mobileView
    );

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
        showSidebar: true,
      });
      //iPad/Tablet in portrait mode
    } else if (xwidth > 600 && xwidth < 1000 && yheight > 500) {
      this.setState({
        mobileView: 2,
        showSidebar: true,
      });
      //iPad/Tablet in Landscape mode
    } else if (xwidth > 992 && xwidth < 1200 && yheight < 992) {
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
    } else if (xwidth > 1800 && yheight < 1000) {
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

        {/* The following will render on a phone in portrait mode */}
        {this.state.mobileView === 0 ? (
          this.state.showSidebar === true ? (
            // If show sidebar, this will render
            <div className="portrait-mode">
              <Row>
                <Col>
                  <SidebarButton toggle={this.toggleSidebar} />
                  <Sidebar />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Content />
                </Col>
              </Row>
            </div>
          ) : (
            // If NOT show sidebar, this will render
            <div className="portrait-mode">
              <Row>
                <Col>
                  <SidebarButton toggle={this.toggleSidebar} />
                  <Content />
                </Col>
              </Row>
            </div>
          )
        ) : // The following will render on phones in landscape mode, as well as tablets in any mode
        this.state.mobileView === 1 ||
          this.state.mobileView === 3 ||
          this.state.mobileView === 2 ||
          this.state.mobileView === 4 ? (
            <div className="landscape-mode">
              <Row>
                <Col sm md={3}>
                  <Sidebar />
                </Col>
                <Col sm md={9}>
                  <Content />
                </Col>
              </Row>
            </div>
        ) : // This will render if the screen size is 1080p
        this.state.mobileView === 5 ? (
          <div className="desktop-1080">
            <Row>
              <Col md lg={2}>
                <Sidebar />
              </Col>
              <Col md lg={10}>
                <Content />
              </Col>
            </Row>
          </div>
        ) : (
          // This will render if the screen size is above 1080p (2k, 4k, etc.)
          <div className="desktop-2kplus">
            <Row>
              <Col md lg={2}>
                <Sidebar />
              </Col>
              <Col md lg={10}>
                <Content />
              </Col>
            </Row>
          </div>
        )}

        {/* <Row>
          {this.state.showSidebar ? (
            <Col>
              <Sidebar toggle={this.toggleSidebar} />
            </Col>
          ) : (
            <Row>
              <Col>
                <SidebarButton toggle={this.toggleSidebar} />{" "}
              </Col>
            </Row>
          )}

          <Col>
            <Content />
          </Col>
        </Row> */}

        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
