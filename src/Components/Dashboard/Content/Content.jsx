import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import cat from "../../../Assets/Pics/cat-gray.gif"

class Content extends Component {
    state = {  } 
    render() { 
        return (<div className="content">
            <Row><Col><h1>Content</h1></Col></Row>
            <Row><Col><h3>Welcome!</h3></Col></Row>
            <Row className="main-img"><Col><img className="image" src={cat} alt="catatwork" /></Col></Row>
            
        </div>);
    }
}
 
export default Content;