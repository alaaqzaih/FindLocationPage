
import {useState ,React} from "react";
import { ComposableMap, Geographies, Geography ,Marker ,Annotation ,ZoomableGroup } from "react-simple-maps";
import './map.scss';

export default function MapComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const markers = [
        { markerOffset: -15, name: "", coordinates: [-100.1193, 20.4897] },
        { markerOffset: -15, name: "", coordinates: [-100.1193, 30.4897] },
        { markerOffset: -15, name: "", coordinates: [-105.1193, 35.4897] },
      ];
    return( 
    <div className="mapcontainer">
    <div className="map">
    <ComposableMap>
        <ZoomableGroup  zoom={3}>
            {" "}
      <Geographies geography='./worldmap.json'>

        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography  className="Geography" key={geo.rsmKey} geography={geo} fill="rgb(185, 182, 182)"
              />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#ef5b23" stroke="#fff" strokeWidth={1.4} />
        </Marker>

      ))}
    
      </ZoomableGroup>
    </ComposableMap>
  
    </div>
  </div>
  )
 
 
}