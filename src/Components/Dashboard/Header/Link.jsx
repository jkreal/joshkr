import React from 'react';
import {Col, Row} from "react-bootstrap";

function Link(props) {
    return ( <Col key={props.i}><h4 className="link">{props.link}</h4></Col> );
}

export default Link;