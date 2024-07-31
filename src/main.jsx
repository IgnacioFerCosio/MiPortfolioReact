import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import './index.css'
import './normalize.css'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Servicios from './Components/Servicios/Servicios.jsx'
import SobreMi from './Components/SobreMi/SobreMi.jsx'
import Proyectos from './Components/Proyectos/Proyectos.jsx'
import EduYExp from './Components/EduYExp/EduYExp.jsx'
import Habilidades from './Components/Habilidades/Habilidades.jsx'
import Contacto from './Components/Contacto/Contacto.jsx'
import Footer from './Components/Footer/Footer.jsx'

const colors = {
  brand: {
    naranja: '#ff8911',
    morado: '#5c5bdb',
    marron: '#644729',
  },
}



const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <Hero/>
      <Box id='servicios'>
        <Servicios/>
      </Box>
      <Box id='sobremi'>
        <SobreMi/>
      </Box>
      <Box id='proyectos'>
        <Proyectos/>
      </Box>
      <EduYExp/>
      <Box id='habilidades'>
        <Habilidades/>
      </Box>
      <Box id='contacto'>
        <Contacto/>
      </Box>
      <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
