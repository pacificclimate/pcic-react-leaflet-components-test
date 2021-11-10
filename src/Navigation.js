import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import './Navigation.css'


function Navigation({ spec }) {
  const match = useRouteMatch("/:path");
  return (
    <Navbar bg="info" variant="light" className="mb-3">
      <Navbar.Brand>
        PCIC React Leaflet Components
      </Navbar.Brand>
      <Nav variant={"pills"} activeKey={match?.params.path}>
        {
          spec.map(({label, path}) => (
            <Nav.Item>
              <Nav.Link eventKey={path} href={path}>
                {label}
              </Nav.Link>
            </Nav.Item>
          ))
        }
      </Nav>
    </Navbar>
  );
}


export default Navigation;
