import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import DemoBaseMap from '../DemoBaseMap';
import { BCBaseMap, YNWTBaseMap } from 'pcic-react-leaflet-components';
import { positions as markers } from '../markers';

import 'pcic-react-leaflet-components/src/leaflet-extensions/control-static.css';
import Navigation from '../Navigation';
import DemoStaticControl from '../DemoStaticControl';

const navSpec = [
  {
    label: 'BCBaseMap',
    path: 'BCBaseMap',
    component: () => (
      <DemoBaseMap
        BaseMap={BCBaseMap}
        initialViewport={BCBaseMap.initialViewport}
        numMaps={2}
        markers={markers}
      />
    ),
  },
  {
    label: 'YNWTBaseMap',
    path: 'YNWTBaseMap',
    component: () => (
      <DemoBaseMap
        BaseMap={YNWTBaseMap}
        initialViewport={YNWTBaseMap.initialViewport}
        numMaps={2}
        markers={markers}
      />
    ),
  },
  {
    label: 'StaticControl',
    path: 'StaticControl',
    component: DemoStaticControl,
  }
];
const defaultPath = 'BCBaseMap';


export default function App() {
  return (
    <Router basename={'/'}>
      <Navigation spec={navSpec}/>
      <Container fluid>
        <Switch>
          {
            navSpec.map(({path, component}) => (
              <Route key={path} path={`/${path}`} component={component}/>
            ))
          }
          <Redirect to={defaultPath}/>
        </Switch>
      </Container>
    </Router>
  );
}
