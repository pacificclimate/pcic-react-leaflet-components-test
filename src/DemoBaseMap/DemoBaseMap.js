import PropTypes from 'prop-types';
import React from 'react';
import { useImmer } from 'use-immer';
import { Col, Row } from 'react-bootstrap';
import { CircleMarker, LayerGroup, Popup } from 'react-leaflet';
import map from 'lodash/fp/map';
import range from 'lodash/fp/range';

import { callbackOnMapEvents, SetView } from 'pcic-react-leaflet-components';

import './DemoBaseMap.css';


function DemoBaseMap({ BaseMap, initialViewport, markers, numMaps}) {
  // Manage view state as a single immutable composite value.
  // Managing it as a set of 3 separate values (lat, lng, zoom) introduces
  // problems due to 3 separate component updates when the view changes.
  // We use immer (via use-immer) to manage immutable values.
  const [view, setView] = useImmer(initialViewport);

  const UpdateViewState = callbackOnMapEvents(
    ["zoomend", "moveend"],
    map => {
      // Holy cow, this is easy with immer. Immutable values FTW.
      setView(draft => {
        const center = map.getCenter();
        draft.center.lat = center.lat;
        draft.center.lng = center.lng;
        draft.zoom = map.getZoom();
      });
    }
  );

  const colWidth = Math.floor(12 / numMaps);
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <p>
            {numMaps} synchronized basemaps |
            View: {JSON.stringify(view)}
          </p>
        </Col>
      </Row>
      <Row>
        {
          map(i => (
            <Col key={i} xs={colWidth}>
              <BaseMap
                id={`map-${i}`}
                zoom={initialViewport.zoom}
                center={initialViewport.center}
              >
                <SetView view={view} debug={true}/>
                <UpdateViewState/>
                <LayerGroup>
                  {
                    markers.map(
                      ({ lng, lat, comment }, i) => (
                        <CircleMarker
                          key={i}
                          center={{ lng, lat }}
                          radius={5}
                          color={'#0000FF'}
                        >
                          <Popup>
                            Lng: {lng}, Lat: {lat} <br/> {comment}
                          </Popup>
                        </CircleMarker>
                      )
                    )
                  }
                </LayerGroup>
              </BaseMap>
            </Col>
          ))(range(0, numMaps))
        }
      </Row>
    </React.Fragment>
  );
}

DemoBaseMap.propTypes = {
  BaseMap: PropTypes.element.isRequired,
  initialViewport: PropTypes.object.isRequired,
  markers: PropTypes.array,
  numMaps: PropTypes.number,
};

DemoBaseMap.defaultProps = {
  numMaps: 1,
  markers: [],
};

export default DemoBaseMap;

