import './App.css';
import './animations/animate-on-view.css';
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Icons from './components/icons/Icons';
import PresupuestoPage from './pages/PresupuestoPage'
import Gallery from './components/gallery/Gallery';
import Body from './components/body/Body'
import images from './constants/images'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const entries = Object.values(images).filter(Boolean)
    const total = entries.length
    let done = 0
    if (total === 0) {
      setLoaded(true)
      return
    }

    const onLoaded = () => {
      done += 1
      setProgress(done)
      if (done >= total) setLoaded(true)
    }

    entries.forEach(src => {
      const img = new Image()
      img.src = src
      if (img.complete) {
        onLoaded()
      } else {
        img.addEventListener('load', onLoaded)
        img.addEventListener('error', onLoaded)
      }
    })
  }, [])

  if (!loaded) {
    return <Loader progress={progress} total={Object.values(images).length} />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Icons />
        <Routes>
          <Route path="/events-website" element={<Body />} />
          <Route path="/events-website/presupuesto" element={<PresupuestoPage />} />
          <Route path="/events-website/galeria" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;