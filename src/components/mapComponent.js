import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from "../SM-logo2Round.png";
import iconSpec from "../SM-iconSpec.png";
import { Image } from 'react-bootstrap';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    myIcon = L.icon({
        iconUrl: icon,
        iconSize: [45,45],
        iconAnchor: [32, 45]
    });

    render() {
        const position = [39.293892, 9.181449];
        return (
            <div style={{paddingTop:"2rem", height: "100%", width:"100%", minHeight: "30rem"}}>
                <MapContainer style={{ height: "100%"}} center={position} zoom={18}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={this.myIcon} position={position}>
                        <Popup>
                            <Image src={iconSpec} width={270}/>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    }
}

export default MapComponent;