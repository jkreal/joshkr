import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { Home, Code, Games, Socials } from "../Content";

import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./Content.css"

function Content() {

    var location = useLocation();
    return (
        <div className="content">
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={1000}>
              <Routes>
                <Route path="/" element={<Home />} exact></Route>
                <Route path="/code" element={<Code />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/socials" element={<Socials />}></Route>
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      );
}

export default Content;
