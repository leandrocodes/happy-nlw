import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import mapMarkerImg from '../images/map-marker.svg'
import mapIcon from '../mixins/mapIcon'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    async function getOrphanages() {
      const { data } = await api.get('orphanages')
      setOrphanages(data)
    }
    getOrphanages()
  }, [])

  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ponta Porã</strong>
          <span>Mato Grosso do Sul</span>
        </footer>
      </aside>

      <Map
        center={[-22.5336591, -55.7022929]}
        zoom={13.5}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map(orphanage => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className='map-popup'
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color='#FFF' />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  )
}

export default OrphanagesMap
