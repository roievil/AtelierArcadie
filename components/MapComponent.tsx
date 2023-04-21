/* eslint-disable @typescript-eslint/no-loss-of-precision */
import React, { useState, useMemo } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

const MapComponent = (): JSX.Element => {
  const libraries = useMemo(() => ['places'], []);
  const [mapCenter] = useState({
    lat: 47.201662412718214,
    lng: -1.5904517807606977,
  });
  const [mapCenterInfo] = useState({
    lat: 47.211662412718214,
    lng: -1.5904517807606977,
  });
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleMarkerClick = (marker: any): void => {
    setSelectedMarker(marker);
  };

  // const infoWindowStyle = {
  //   backgroundColor: 'black'

  // }

  return (
    <GoogleMap
      center={mapCenter}
      zoom={12}
      mapContainerStyle={{ height: '640px', width: '100%' }}>
      <Marker
        position={mapCenter}
        icon={{
          url: '/images/contact/customMarker.png',
        }}
        onClick={() => {
          handleMarkerClick(1);
        }}
      />
      {selectedMarker !== null && (
        <InfoWindow
          position={mapCenterInfo}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Atelier Arcadie
            </h3>
            <p className="text-gray-600">3 Rue du Bois Haligan</p>
            <p className="text-gray-600">44100 Nantes</p>
            <p className="text-gray-600">France</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapComponent;
