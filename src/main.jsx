import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Servicios from './Components/Servicios/Servicios.jsx'
import SobreMi from './Components/SobreMi/SobreMi.jsx'
import Proyectos from './Components/Proyectos/Proyectos.jsx'
import EduYExp from './Components/EduYExp/EduYExp.jsx'
import Habilidades from './Components/Habilidades/Habilidades.jsx'
import Contacto from './Components/Contacto/Contacto.jsx'
import Footer from './Components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <Servicios/>
    <SobreMi/>
    <Proyectos/>
    <EduYExp/>
    <Habilidades/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>,
)
