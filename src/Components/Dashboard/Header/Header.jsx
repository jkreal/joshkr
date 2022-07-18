import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Link from "../Header/Link.jsx";

class Header extends Component {
    state = {  } 
    links = ["Home", "Socials", "Games", "Code"];
    render() { 
        return (<div className="header">
            <div className="header-title"><h1>joshkr.com</h1></div>
            <Row className="header-navbar">
                {this.links.map((link, i ) => {
                    return(<Link key={i + "nav"} link={this.links[i]}/>)
                })}
            </Row>
        </div>);
    }
}
 
export default Header;