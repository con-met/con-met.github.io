import React from "react";
import GoogleMapReact from "google-map-react";

const isClient = typeof window !== "undefined";

const GoogleMap = (props) => {
  const address = { lng: 43.8743196, lat: 11.0990252 };
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
    <section className="google-map">
      <div className="map">
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBSc7_4PnKa0J_oyO1UoIkOk6bNlOgatYs",
            }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <div className="marker" lat={lat} lng={lng} />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
};

export default GoogleMap;
