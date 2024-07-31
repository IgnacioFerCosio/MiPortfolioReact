import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import Carta from './EduYExpCard'
import TimeLine from './TimeLine'



function EduYExp() {

  return (
     <Box as='section' pt={'100px'}>
      <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', lg:'row'}}>
        <Box w={{base:'94%', md:'70%',lg:'45%', xl:'40%'}} p={'30px'}>
          <Flex justifyContent={'space-between'} direction={'column'}>
            <Heading as={'h4'} fontSize={'20px'} pb={'30px'} color={'brand.naranja'} transform={'translate(-30px,0)'}>Educación</Heading>
            <TimeLine color={'brand.naranja'}></TimeLine>
            <Carta texto1={"2022 - 2026"} texto2={"Mendoza, Argentina"} texto3={"Ingeniería en Sistemas de Información"} texto4={"Universidad Tecnológica Nacional FRM"} color={"#ffecce"}></Carta>
            <Carta texto1={"2024 - 2024"} texto2={"Mendoza, Argentina"} texto3={"Professional Fullstack Developer"} texto4={"Universidad Tecnológica Nacional FRC"} color={"#ffecce"}></Carta>
            <Carta texto1={"2016 - 2021"} texto2={"Mendoza, Argentina"} texto3={"Certificado de Competencia Lingüística de nivel intermedio superior en INGLÉS B1"} texto4={"Colegio de Lenguas Extranjeras"} color={"#ffecce"}></Carta>
          </Flex>
          
        </Box>
        <Box w={{base:'94%', md:'70%',lg:'45%', xl:'40%'}} p={'30px'}>
          <Flex justifyContent={'space-between'} direction={'column'}>
            <Heading as={'h4'} fontSize={'20px'} pb={'30px'} color={'brand.morado'} transform={'translate(-30px,0)'}>Experiencia</Heading>
            <TimeLine color={'brand.morado'}></TimeLine>
            <Carta texto1={"2022 - 2026"} texto2={"Mendoza, Argentina"} texto3={"Ingeniería en Sistemas de Información"} texto4={"Universidad Tecnológica Nacional FRM"} color={"#e3e2ff"}></Carta>
            <Carta texto1={"2024 - 2024"} texto2={"Mendoza, Argentina"} texto3={"Professional Fullstack Developer"} texto4={"Universidad Tecnológica Nacional FRC"} color={"#e3e2ff"}></Carta>
            <Carta texto1={"2016 - 2021"} texto2={"Mendoza, Argentina"} texto3={"Certificado de Competencia Lingüística de nivel intermedio superior en INGLÉS B1"} texto4={"Colegio de Lenguas Extranjeras"} color={"#e3e2ff"}></Carta>
          </Flex>
        </Box>
      </Flex>    
     </Box>   
  )
}

export default EduYExp