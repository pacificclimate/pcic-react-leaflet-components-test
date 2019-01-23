import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { pick, range, map } from 'lodash/fp';

import { BCBaseMap } from 'pcic-react-leaflet-components';
import './DemoBCBaseMap.css'


export default class DemoBCBaseMap extends React.Component {
  static propTypes = {
    numMaps: PropTypes.number,
  };

  static defaultProps = {
    numMaps: 2,
  };

  state = {
    viewport: BCBaseMap.initialViewport,
  };

  handleViewportChange = viewport => this.setState({ viewport });

  render() {
    const colWidth = Math.floor(12 / this.props.numMaps);
    return (
      <Grid fluid>
        <Row>
          <Col lg={12}>
            <h2>{this.props.numMaps} synchronized basemaps</h2>
          </Col>
        </Row>
        <Row>
          {
            map(i => (
              <Col key={i} lg={colWidth}>
                <BCBaseMap
                  viewport={this.state.viewport}
                  onViewportChange={this.handleViewportChange}
                />
              </Col>
            ))(range(0,this.props.numMaps))
          }
        </Row>
      </Grid>
    );
  }
}
