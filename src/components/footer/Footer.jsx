import React from 'react'
import './Footer.css'
import MapComponent from '../Map/Map'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="col about">
          <h4>Casa Grande Eventos</h4>
          <p>Organizamos eventos memorables: bodas, cumpleaños y más.</p>
        </div>

        <div className="col links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="/presupuesto">Presupuesto</a></li>
          </ul>
        </div>

        <div className="col contact">
          <h4>Contacto</h4>
          <p>Email: higgins21alexandra@gmail.com</p>
          <p>Cel: 0414 302 5558</p>
        </div>
        <div className="col map-col">
          <h4>Ubicación</h4>
          <MapComponent />
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Casa Grande Eventos. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
