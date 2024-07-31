import React from 'react'
import logo from '/src/assets/images/logo.png'
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import Buttons from '../Buttons/Buttons'
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"

const CustomLink = ({ children, path  ,...props}) => {
  return (
    <Link
    mr={"30px"}
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
        <Box display={{base:'block', md:'none'}} p={'20px'}>
          <Flex justifyContent={'center'}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<CiMenuBurger/>}
                variant='outline'
              />
              <MenuList>
                <MenuItem>
                  <Link href='#sobremi'>Sobre Mi</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='#proyectos'>Proyectos</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='#habilidades'>Habilidades</Link>
                </MenuItem>
                <MenuItem>
                <Link href='#servicios'>Servicios</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
        <Flex justifyContent={'space-around'} alignItems={'center'} >  
          <Box>
            <Link href='#hero' display={{base: 'none', xl: 'block'}}><img src={logo} alt="" /></Link>    
          </Box>
          <Box as='nav' w={{base: '90%',  xl: '70%' , '2xl': '45%' }} display={{base:'none', md:'block'}}>
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