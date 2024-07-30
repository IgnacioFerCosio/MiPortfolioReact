import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import Cuadros from '../Cuadros/Cuadros'
import Proyecto1 from '../../assets/images/proyecto1.png'
import Proyecto2 from '../../assets/images/proyecto2.png'
import Proyecto3 from '../../assets/images/proyecto3.png'



function Proyectos() {

  return (
    <Box as='section' mt={'100px'}>
      <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'0px'}>PROYECTOS</Heading>
        <Heading as={'h1'} fontSize={'38px'} m={'0px'}>Muestra de Portfolios Digitales</Heading>
        <Box w={'80%'}>
          <Flex justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>
            <Cuadros imagen={Proyecto1} titulo={"Proyecto 1"} texto={"Detalles del proyecto"}></Cuadros>
            <Cuadros imagen={Proyecto2} titulo={"Proyecto 2"} texto={"Detalles del proyecto"}></Cuadros>
            <Cuadros imagen={Proyecto3} titulo={"Proyecto 3"} texto={"Detalles del proyecto"}></Cuadros>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Proyectos