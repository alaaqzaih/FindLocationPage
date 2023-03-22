 import MapComponent from "./components/map/Map";
//  import LocationComp from "./components/LocationDetails/LocationComp";
import { locationData } from "./data";
import LocationComp from "./components/locationDetails/LocDetails";
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="locComp"> {locationData.map((item) => (
     <LocationComp  loc={item} />
  ))}</div>
  <div className="mapchart">
  <MapComponent />
  </div>
   
    </div>
  );
}

export default App;
