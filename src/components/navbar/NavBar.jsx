import React, { useState, useEffect, useRef } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)

  useEffect(()=>{
    const onScroll = ()=>{
      const y = window.scrollY
      const dy = y - lastY.current
      // small threshold to avoid flicker
      if(Math.abs(dy) < 10) return
      if(dy > 0 && y > 80){ // scrolling down
        setHidden(true)
      } else { // scrolling up
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`site-nav ${hidden ? 'nav-hidden' : ''}`}>
      <div className="nav-inner">
        <div className="brand">Casa Grande</div>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">{open ? '✕' : '☰'}</button>
        <ul className={`${open ? 'nav-links open' : 'nav-links'}`}>
          <li><a href="/events-website" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="/events-website#galeria" onClick={() => setOpen(false)}>Galería</a></li>
          <li><a href="/events-website#contacto" onClick={() => setOpen(false)}>Contacto</a></li>
          <li><Link to="/events-website/presupuesto" onClick={() => setOpen(false)}>Presupuesto</Link></li>
        </ul>
      </div>
    </nav>
  )
}
