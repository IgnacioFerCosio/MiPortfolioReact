import React from 'react'
import logo from '/src/assets/images/logo.png'
import { Box, Flex, Link  } from '@chakra-ui/react'
import Buttons from '../Buttons/Buttons'

const CustomLink = ({ children, path  ,...props}) => {
  return (
    <Link
    href={path}
      _hover={{ textDecoration: 'none', color: 'brand.naranja', transition:'0.7s' }}
      {...props}
    >
      {children}
    </Link>
  );
};

function Header() {

  return (
    
      <Box as='header' bg={'white'} boxShadow='md' p={'0.5%'} position={'fixed'} w={'100%'} zIndex={'1000'} fontSize={'23px'} fontWeight={'550'}>
        <Flex justifyContent={'space-around'} alignItems={'center'} >  
          <Box>
              <img src={logo} alt="" /> 
          </Box>
          <Box as='nav' w={'45%'}>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
              <CustomLink path={'#sobremi'}>SobreMí</CustomLink>
              <CustomLink path={'#proyectos'}>Proyectos</CustomLink>
              <CustomLink path={'#habilidades'}>Habilidades</CustomLink>
              <CustomLink path={'#servicios'}>Servicios</CustomLink>
              <Buttons>
                Descargar CV
              </Buttons>
            </Flex>
          </Box>
        </Flex>
      </Box>
    
    
    
      
    
  )
}

export default Header