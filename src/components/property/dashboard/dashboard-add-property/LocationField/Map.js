import React from "react";

const Map = ({ onMapClick }) => {
  // Default coordinates for Muğla, Fethiye
  const defaultLat = 36.6514;
  const defaultLng = 29.1235;

  return (
    <iframe
      className="h550"
      loading="lazy"
      src={`https://maps.google.com/maps?q=${defaultLat},${defaultLng}&t=m&z=14&output=embed&iwloc=near`}
      title="Muğla, Fethiye"
      aria-label="Muğla, Fethiye"
      style={{ width: '100%', border: 0 }}
    />
  );
};

export default Map;
