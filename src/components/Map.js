// import React from 'react';
// // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import {
//     interaction, layer, custom, control, //name spaces
//     Interactions, Overlays, Controls,     //group
//     Map, Layers, Overlay, Util    //objects
//   } from "react-openlayers";


// const location = {
//     lat: 57.323627869120166,
//     lng: -4.424938450055394
// };

// const MyMap = () => {
//     return (
// <LoadScript
//     googleMapsApiKey={process.env.REACT_APP_API_KEY}
// >
//     <GoogleMap
//         mapContainerStyle={{ margin: 'auto' , width: '500px', height: '500px' }}
//         center={location}
//         zoom={10}
//     >
//         <Marker position={location}></Marker>
//     </GoogleMap>
// </LoadScript>
// <>


{/* <Map view={{ center: [0, 0], zoom: 2 }} onClick={showPopup}>
                <Layers>
                    <layer.Tile />
                    <layer.Vector source={markers} style={markers.style} zIndex="1" />
                </Layers>
                <Overlays>
                    <Overlay
                        ref={comp => this.overlayComp = comp}
                        element="#popup" />
                </Overlays>
                <Controls attribution={false} zoom={true}>
                    <control.Rotate />
                    <control.ScaleLine />
                    <control.FullScreen />
                    <control.OverviewMap />
                    <control.ZoomSlider />
                    <control.ZoomToExtent />
                    <control.Zoom />
                </Controls>
                <Interactions>
                    <interaction.Select style={selectedMarkerStyle} />
                    <interaction.Draw source={markers} type='Point' />
                    <interaction.Modify features={markers.features} />
                </Interactions>
            </Map>

            <custom.Popup ref={comp => this.popupComp = comp}>
            </custom.Popup>

        </>
    )
}

export default Map */}


// import React, { useRef, useState, useEffect } from "react"
// import "./Map.css";
// import ol from "ol";
// import MapContext from "./MapWrapper";

// const Map = ({ children, zoom, center }) => {
//     const mapRef = useRef();
//     const [map, setMap] = useState(null);
//     // on component mount
//     useEffect(() => {
//         let options = {
//             view: new ol.View({ zoom, center }),
//             layers: [],
//             controls: [],
//             overlays: []
//         };
//         let mapObject = new ol.Map(options);
//         mapObject.setTarget(mapRef.current);
//         setMap(mapObject);
//         return () => mapObject.setTarget(undefined);
//     }, []);
//     // zoom change handler
//     useEffect(() => {
//         if (!map) return;
//         map.getView().setZoom(zoom);
//     }, [zoom]);
//     // center change handler
//     useEffect(() => {
//         if (!map) return;
//         map.getView().setCenter(center)
//     }, [center])
//     return (
//         <MapContext.Provider value={{ map }}>
//             <div ref={mapRef} className="ol-map">
//                 {children}
//             </div>
//         </MapContext.Provider>
//     )
// }
// export default Map;