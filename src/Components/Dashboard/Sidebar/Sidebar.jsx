import React, { Component } from 'react';
import SidebarButton from "../Sidebar/SidebarButton.jsx";

class Sidebar extends Component {
    constructor () {
        super();
        this.state = {};
    }

    componentDidMount() {
        
    }
    state = {  } 
    render() { 
        return (<div className="sidebar">
            <div className="sidebar-title"><h1>Sidebar</h1></div>
            {/* <SidebarButton toggle={this.props.toggle}/> */}
        </div>);
    }
}
 
export default Sidebar;