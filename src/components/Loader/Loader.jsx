import React from 'react'
import './Loader.css'

export default function Loader({ progress, total }) {
  const pct = total ? Math.round((progress / total) * 100) : 0
  return (
    <div className="app-loader" role="status" aria-live="polite">
      <div className="loader-box">
        <div className="charging-logo" />
        <div className="loader-text">Cargando Imagenes {pct}%</div>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}
