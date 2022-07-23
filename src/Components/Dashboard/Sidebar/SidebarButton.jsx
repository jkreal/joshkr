import React from 'react';
import { Button } from 'react-bootstrap';

function SidebarButton(props) {
    return ( <div className="sidebar-button">
        <Button onClick={props.toggle}>Sidebar</Button>
    </div> );
}

export default SidebarButton;