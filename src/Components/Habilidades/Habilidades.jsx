import React from 'react'
import {Box, Heading, Flex} from '@chakra-ui/react'
import Skill from './Skill'
import imagenHTML from '../../assets/images/html-5.svg'
import imagenCSS from '../../assets/images/css.svg'
import imagenJS from '../../assets/images/js.svg'
import imagenC from '../../assets/images/cmasmas.svg'
import imagenPOSTGRE from '../../assets/images/postgresql.svg'
import imagenJAVA from '../../assets/images/java.svg'
import imagenPY from '../../assets/images/python.svg'
import imagenREACT from '../../assets/images/react.svg'

function Habilidades() {

  return (
    <Box as='section'>
      <Flex direction='column' justifyContent={'center'} alignItems={'center'}>
        <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'8px'}>HABILIDADES</Heading>
        <Heading as={'h1'} fontSize={'38px'} mt={'0px'}>Áreas Que Manejo</Heading>
        <Box w={'80%'}>
          <Flex direction={{base:'row', xl:'column'}} alignItems={'center'} justifyContent={'center'}>
            <Box w={'100%'}>
              <Flex justifyContent={'space-around'} direction={{base:'column', xl:'row'}} alignItems={'center'}>
                <Skill imagen={imagenHTML} titulo={"HTML"} texto={"Intermedio"}></Skill>
                <Skill imagen={imagenCSS} titulo={"CSS"} texto={"Intermedio"}></Skill>
                <Skill imagen={imagenJS} titulo={"JavaScript"} texto={"Intermedio"}></Skill>
                <Skill imagen={imagenC} titulo={"C++"} texto={"Intermedio"}></Skill>
              </Flex>
            </Box>
            <Box w={'100%'}>
              <Flex justifyContent={'space-around'} direction={{base:'column', xl:'row'}} alignItems={'center'}>
                <Skill imagen={imagenPOSTGRE} titulo={"SQL"} texto={"Intermedio"}></Skill>
                <Skill imagen={imagenJAVA} titulo={"Java"} texto={"Intermedio"}></Skill>
                <Skill imagen={imagenPY} titulo={"Python"} texto={"Principiante"}></Skill>
                <Skill imagen={imagenREACT} titulo={"React"} texto={"Principiante"}></Skill>
              </Flex>
            </Box>
          </Flex>
          
        </Box>
        
       </Flex>
      
      
    </Box>
  )
}

export default Habilidades