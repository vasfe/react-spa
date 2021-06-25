import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const location = {
    lat: 57.323627869120166,
    lng: -4.424938450055394
};

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '600px' }}
                center={location}
                zoom={10}
            >
                <Marker position={location}></Marker>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map