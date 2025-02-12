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

    // Access token using Vite's environment variable syntax
    const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
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
      minZoom: 1,
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
          color: "#4CAF50",
          scale: 0.8
        })
          .setLngLat(country.coordinates)
          .addTo(mapInstance);

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25
        })
          .setText(country.name);

        marker.getElement().addEventListener('mouseenter', () => {
          marker.setPopup(popup);
          popup.addTo(mapInstance);
        });

        marker.getElement().addEventListener('mouseleave', () => {
          popup.remove();
        });
      });
    });

    return () => {
      mapInstance.remove();
    };
  }, []);

  return (
    <section className="global-presence">
      <div className="global-content max-w-6xl mx-auto px-4 py-16">
        <h2 className="global-title text-3xl font-bold text-center mb-6">
        </h2>
        <p className="global-description text-center mb-12 max-w-3xl mx-auto text-gray-600">
        
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