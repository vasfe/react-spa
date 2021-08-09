import React, { Component } from "react";
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";
import Icon from "ol/style/image"

const location = [
  16.403594489160753,
  39.48970105318638
];

// const location = [
//   16.63, 39.07

// ];

class PublicMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: location,
      zoom: 15,
      image: new Icon({
        anchor: location,
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        imgSize: [32, 48],
        src: "https://openlayers.org/en/v3.20.1/examples/data/icon.png",
      })
    };

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom,
        projection: 'EPSG:4326'
      })
    });
  }

  // updateMap() {
  //   this.olmap.getView().setCenter(this.state.center);
  //   this.olmap.getView().setZoom(this.state.zoom);
  // }

  componentDidMount() {
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  // userAction() {
  //   this.setState({ center: [546000, 6868000], zoom: 5 });
  // }

  render() {
    // this.updateMap(); // Update map on render?
    return (
      <div id="map" style={{ width: "100%", height: "360px" }}>
        {/* <button onClick={e => this.userAction()}>setState on click</button> */}
      </div>
    );
  }
}

export default PublicMap;
