import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./GlobalPresence.css";

const COUNTRIES = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Oman", coordinates: [55.9754, 21.4735] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
];

const GlobalPresence = () => {
  const mapContainerRef = useRef(null);
  
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Ensure access token exists
    const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    if (!accessToken) {
      console.error('Mapbox access token is missing');
      return;
    }

    mapboxgl.accessToken = accessToken;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [78, 20],
      zoom: 1.25,
      minZoom: 1, // Add zoom constraints
      maxZoom: 15,
    });

    // Add navigation controls
    mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');

    mapInstance.on('load', () => {
      // Hide country labels
      mapInstance.setLayoutProperty('country-label', 'visibility', 'none');
      
      // Add markers after map is loaded
      COUNTRIES.forEach((country) => {
        const marker = new mapboxgl.Marker({
          color: "#4CAF50", // Using our theme color
          scale: 0.8 // Slightly smaller markers
        })
          .setLngLat(country.coordinates)
          .addTo(mapInstance);

        // Create popup but don't add it to map yet
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25
        })
          .setText(country.name);

        // Show popup on hover
        marker.getElement().addEventListener('mouseenter', () => {
          marker.setPopup(popup);
          popup.addTo(mapInstance);
        });

        // Hide popup on leave
        marker.getElement().addEventListener('mouseleave', () => {
          popup.remove();
        });
      });
    });

    // Cleanup function
    return () => {
      mapInstance.remove();
    };
  }, []); // Empty dependency array since we don't have any dependencies

  return (
    <section className="global-presence">
      <div className="global-content max-w-6xl mx-auto px-4 py-16">
        <h2 className="global-title text-3xl font-bold text-center mb-6">
          Global Presence
        </h2>
        <p className="global-description text-center mb-12 max-w-3xl mx-auto text-gray-600">
          We are proud to operate globally with a strong presence in India, Oman, and the UAE. 
          Our sister companies in Oman and Dubai ensure a seamless distribution network and 
          unparalleled customer support, strengthening our position as a trusted leader in 
          the AAC block industry.
        </p>
        <div 
          ref={mapContainerRef} 
          className="map-container rounded-lg overflow-hidden shadow-lg"
        />
      </div>
    </section>
  );
};

export default GlobalPresence;