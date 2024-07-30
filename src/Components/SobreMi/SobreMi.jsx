import React from 'react'
import { Box, Link, Text, Heading, Image, Flex, Icon } from '@chakra-ui/react'
import yo from '../../assets/images/yo.png'
import backImage from '../../assets/images/fondoSenoidal.png'
import Buttons from '../Buttons/Buttons'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";

const CustomIcons = ({ children, ...props }) => {
  return (
    <Icon
      fontSize={'40px'}
      color={'brand.morado'}
      _hover={{color: 'brand.naranja', transition:'0.7s' }}
      {...props}
    >
      {children}
    </Icon>
  );
};

function SobreMi() {

  return (
    <Box as='section'
      bgImage={backImage}
      pt={'3%'}
      pb={'1%'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Image src={yo} alt="" />
        <Box w={'35%'} pl={'7%'} textAlign={'justify'}>
          <Box>
            <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'8px'}>SOBRE MÍ</Heading>
            <Heading as={'h1'} fontSize={'38px'} mt={'0px'} textAlign={'left'}>Estudiante de Sistemas y Programación</Heading>
            <Text lineHeight={'28px'} fontSize={'20px'}>Un programador junior full-stack que le gusta mucho resolver porblemas de lógica en el Back-End. También soy un estudiante avanzado en Ingeniería en Sistemas en la UTN, ansioso por aprender y aplicar mis conocimientos en el mundo tecnológico.</Text>
          </Box>
          <Box w={'120px'} pb={'10px'} mt={'20px'}>
            <Flex justifyContent={'space-between'}>
              <Link href="https://github.com/IgnacioFerCosio" target="_blank">
                <CustomIcons as={FaGithub} ></CustomIcons>
              </Link>
              <Link href="https://www.linkedin.com/in/ignacio-fern%C3%A1ndez-4048a41b3/" target="_blank">
                <CustomIcons as={FaLinkedin}></CustomIcons>
              </Link>
            </Flex>
          </Box>
          <Buttons>Descargar CV</Buttons>
        </Box>
      </Flex>

    </Box>
  )
}

export default SobreMi