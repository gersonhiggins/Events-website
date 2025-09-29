import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import './Map.css'

const containerStyle = {
  width: '100%',
  height: '180px'
}

const center = {
  lat: -34.397,
  lng: 150.644
}

export default function MapComponent({ lat = center.lat, lng = center.lng }){
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey
  })

  if(loadError) return <div className="map-error">Map failed to load</div>
  if(!isLoaded) return <div className="map-loading">Cargando mapa...</div>

  return (
    <div className="map-root">
      <GoogleMap mapContainerStyle={containerStyle} center={{lat, lng}} zoom={12}>
        <Marker position={{lat, lng}} />
      </GoogleMap>
    </div>
  )
}
