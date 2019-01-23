import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route, Redirect, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import DemoBCBaseMap from '../DemoBCBaseMap';

const navSpec = [
  { label: 'BCBaseMap', path: 'BCBaseMap', component: DemoBCBaseMap },
];


export default class App extends React.Component {
  render() {
    return (
      <Router basename={'/#'}>
        <div>
          <h1>PCIC React Leaflet Components (external demo)</h1>
          <Navbar fluid>
            <Nav>
              {
                navSpec.map(({label, path}) => (
                  <LinkContainer key={path} to={`/${path}`}>
                    <NavItem eventKey={path}>
                      {label}
                    </NavItem>
                  </LinkContainer>
                ))
              }
            </Nav>
          </Navbar>

          <Switch>
            {
              navSpec.map(({path, component}) => (
                <Route key={path} path={`/${path}`} component={component}/>
              ))
            }
            <Redirect to={'/Simple'}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
