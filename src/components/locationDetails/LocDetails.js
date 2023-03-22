import React from "react";
import "./locationComp.scss";
import { locationData } from "../../data";
function LocationComp(props) {
  return (
    <div className="LocationComp">
      <div className="details-section">
        <h4 className="hdr-4">
          <a>{props.loc.title}</a>
        </h4>
        <div className="loc-details">
          <div className="secLeft">
            <div>{props.loc.detailedLoc}</div>
            <div>{props.loc.street}</div>
            <div className="direction-link">
              <a href="https://www.google.com/maps/place/Estes+Audiology+Hearing+Centers+-+Austin/@30.306645,-97.7447876,15z/data=!4m5!3m4!1s0x0:0x79f5a7d0c48f6b7d!8m2!3d30.306645!4d-97.7447876?shorturl=1">
                Get directions{" "}
              </a>
            </div>
          </div>
          <div className="secRight">
            <div>
              {Object.entries(props.loc.days).map(([key, day], i) => (
                <span>
                  <strong> {key} </strong> : {day} <br />
                </span>
                
              ))}
              {props.loc.CurrentlyClosed && (
               <div className="open-closed">Currently Closed</div>)}
            </div>
          </div>
        </div>

        <div className="loc-phone">
            <strong>Phone:</strong>
            <a href=""> 737-400-0324</a>
          <div>
            <strong>Fax:</strong>
            <a href=""> 512-367-5773</a>
          </div>
        </div>
        <div className="loc-services">
          <div className="service">
            {" "}
            <img src="https://hearlifeagain.alpacaaudiology.com/wp-content/themes/alpaca-child/_images/icons/icn-in-person.svg"></img>{" "}
            In person
          </div>
          <div className="service">
            {" "}
            <img src="https://hearlifeagain.alpacaaudiology.com/wp-content/themes/alpaca-child/_images/icons/icn-car.svg"></img>{" "}
            Curbside{" "}
          </div>
          <div className="service">
            {" "}
            <img src="https://hearlifeagain.alpacaaudiology.com/wp-content/themes/alpaca-child/_images/icons/icn-laptop.svg"></img>{" "}
            Virtual{" "}
          </div>
        </div>
        <div className="options">
          <a className="option">
            {" "}
            <img src="https://hearlifeagain.alpacaaudiology.com/wp-content/themes/alpaca-child/_images/icons/icn-calendar.svg"></img>{" "}
            Book an appointment
          </a>
          <a className="option"> See more details</a>
        </div>
      </div>
    </div>
  );
}

export default LocationComp;
