import React, { Component } from "react";
import SidebarContent from "../Sidebar/SidebarContent.jsx";
import Login from "../Sidebar/Login.jsx";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">
          <h1>Sidebar</h1>
        </div>
        <Login/>
      </div>
    );
  }
}

export default Sidebar;
