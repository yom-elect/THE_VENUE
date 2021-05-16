import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=All%20Saint%20Church,%20Montgomery%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
