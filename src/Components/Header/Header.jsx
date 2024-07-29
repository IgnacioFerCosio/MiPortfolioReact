import React from 'react'
import './Header.css'
import logo from '/src/assets/images/logo.png'
import { Box, Button, Flex, Link  } from '@chakra-ui/react'

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
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
              {/* <i className="bi bi-list"></i>   */}
          </Box>
          <Box as='nav' w={'45%'}>
            <Flex justifyContent={'space-around'} alignItems={'center'}>
              <CustomLink>SobreMí</CustomLink>
              <CustomLink>Proyectos</CustomLink>
              <CustomLink>Habilidades</CustomLink>
              <CustomLink>Servicios</CustomLink>
              <Link borderRadius={'45px'} bg={'brand.naranja'} color={'white'} border={'2px'} borderColor={'brand.naranja'} 
              p={'18px 58px'} fontSize={'19px'} fontWeight={'500'} _hover={{bg: "transparent", color: "brand.naranja", transition:'0.7s'}}>
                Descargar CV
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    
    
    
      
    
  )
}

export default Header