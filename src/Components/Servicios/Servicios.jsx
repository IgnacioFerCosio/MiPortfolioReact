import React from 'react'
import { Box, Heading, Text, Img, Flex, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import datoBlanco from '/src/assets/images/datoBlanco.svg'
import dato from '/src/assets/images/dato.svg'
import mundoBlanco from '/src/assets/images/mundoBlanco.svg'
import mundo from '/src/assets/images/mundo.svg'
import dataBaseBlanco from '/src/assets/images/dataBaseBlanco.svg'
import dataBase from '/src/assets/images/dataBase.svg'
import Carta from '../Cards/Cards'

function Servicios() {

  return (
    <Box as={'section'} m={'7% 0'}>
      <Flex direction={'column'} alignItems={'center'} >
      <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'8px'}>SERVICIOS</Heading>
      <Heading as={'h1'} fontSize={'38px'} mt={'0px'}>Servicios Profesionales! Démosles una mirada</Heading>
      <Box pt={'40px'} w={'75%'}>
        <Flex justifyContent={'space-around'} alignItems={'center'}>
          <Carta imagen1={datoBlanco} imagen2={dato} titulo={"Desarrollo Back-End"} texto={"Me especializo en la programación orientada a objetos con Java y Python, con el objetivo de crear sistemas confiables."}></Carta>
          <Carta imagen1={mundoBlanco} imagen2={mundo} imagen2Styles={{ transform: "translate(0px, -80%)"}} imagen1Styles={{ transform: "translate(0px, -80%)"}} titulo={"Desarrollo Front-End"} texto={"Me dedico a la creación de páginas web con Html y CSS, brindando diseños originales y animados, asegurando diseños responsive."}></Carta>
          <Carta imagen1={dataBaseBlanco} imagen2={dataBase} imagen2Styles={{ transform: "translate(0px, -105%)"}} imagen1Styles={{ transform: "translate(0px, -105%)"}} titulo={"Bases de Datos"} texto={"Puedo crear bases de datos desde cero, administrarlas y realizar consultas, principalmente orientadas a SQL."}></Carta> 
        </Flex>
        
      </Box>
      </Flex>
    </Box>
  )
}

export default Servicios