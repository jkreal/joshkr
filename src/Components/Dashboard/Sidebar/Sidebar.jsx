import React, { Component } from "react";
import SidebarContent from "../Sidebar/SidebarContent.jsx";

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
        <SidebarContent content={"This is sidebar content!"}/>
        <SidebarContent content={"This is sidebar content!"}/>
        <SidebarContent content={"This is sidebar content!"}/>
        <SidebarContent content={"This is sidebar content!"}/>
        {/* <SidebarButton toggle={this.props.toggle}/> */}
      </div>
    );
  }
}

export default Sidebar;
