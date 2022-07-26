import React from "react";

import {Link} from "react-router-dom";

function SidebarContent(props) {
  return <div className="sidebar-content">
    <h4>{props.content}</h4>
    <p>{props.subcontent}</p>
    </div>;
}

export default SidebarContent;
