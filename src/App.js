import './App.css';
import './animations/animate-on-view.css';
import initAnimateOnView from './animateOnView';
import { useEffect } from 'react'
import NavBar from './components/navbar/NavBar'
import images from './constants/images';
///import Body from './components/body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PresupuestoPage from './pages/PresupuestoPage'
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    const opts = { root: null, rootMargin: '0px', threshold: 0.15 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          const dir = el.dataset.direction || 'left'
          el.classList.remove(dir === 'left' ? 'hidden-left' : 'hidden-right')
          el.classList.add(dir === 'left' ? 'reveal-left' : 'reveal-right')
        }
      })
    }, opts)

    const sections = document.querySelectorAll('[data-animated]')
    sections.forEach(s => {
      const dir = s.dataset.direction || 'left'
      s.classList.add(dir === 'left' ? 'hidden-left' : 'hidden-right')
      observer.observe(s)
    })

    const cleanupAnimate = initAnimateOnView();
    return () => { observer.disconnect(); if (cleanupAnimate && cleanupAnimate.disconnect) cleanupAnimate.disconnect(); }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <main>
              <section className="parallax-slide">
                <div className='fixed-parallax' style={{
                  backgroundImage: `url(${images.bg1})`
                }}>
                  <span />
                  <img src={images.logo} className='logo' alt="Eventos Inolvidables" />
                <p data-animate-on-view data-animation="fade-left" data-delay="200ms">
                  Creamos experiencias únicas y memorables para cada ocasión especial.
                </p>
                <p data-animate-on-view data-animation="fade-left" data-delay="200ms">Bodas, cumpleaños, etc.</p>
                <span />
                </div>
              </section>
              <section className="parallax-slide">
                <div className='fixed-parallax' style={{
                  backgroundImage: `url(${images.bg6})`
                }}>
                  <span />
                  <span />
                  <h1 data-animate-on-view data-animation="fade-right" data-delay="200ms">Celebra con Nosotros</h1>
                  <p data-animate-on-view data-animation="fade-right" data-delay="200ms">Reserva con nosotros en Casa Grande</p>
                  <span />
                  <span />
                </div>
              </section>
                            <section className="parallax-slide">
                <div className='fixed-parallax' style={{
                  backgroundImage: `url(${images.bg3})`
                }}>
                </div>
              </section>
                            <section className="parallax-slide">
                <div className='fixed-parallax' style={{
                  backgroundImage: `url(${images.bg5})`
                }}>
                </div>
              </section>
                            <section className="parallax-slide">
                <div className='fixed-parallax' style={{
                  backgroundImage: `url(${images.bg2})`
                }}>
                </div>
              </section>
            </main>
          } />
          <Route path="/presupuesto" element={<PresupuestoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
