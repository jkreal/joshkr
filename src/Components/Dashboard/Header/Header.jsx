import React, { Component } from "react";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  links = ["Home", "Socials", "Games", "Code"];
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <h1>joshkr.com</h1>
        </div>
        <Row className="header-navbar">
          {this.links.map((link, i) => {
            return (
              <Link
                className="link"
                to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()}
                key={i + "-nav"}
              >
                {link}
              </Link>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Header;
