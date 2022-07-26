import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";


import { Home, Code, Games, Socials } from "../Content";

import { Routes, Route} from "react-router-dom";

class Content extends Component {
    state = {  } 
    render() { 
        return (<div className="content">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/code" element={<Code/>}></Route>
                <Route path="/games" element={<Games/>}></Route>
                <Route path="/socials" element={<Socials/>}></Route>
            </Routes>
        </div>);
    }
}
 
export default Content;