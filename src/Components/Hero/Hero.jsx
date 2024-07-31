import React from 'react'
import perfil from '/src/assets/images/perfil.jpg'
import { Box, Flex, Image, Heading, Text, Link, Icon } from '@chakra-ui/react'
import { IoPaperPlaneOutline } from "react-icons/io5";


const HeroButton = ({ children, path, ...props }) => {
  return (
    <Link
      href={path}
      bg={'brand.naranja'}
      color={'white'}
      border={'2px'}
      borderColor={'brand.naranja'}
      p={'20px 10%'}
      borderRadius={'45px'}
      _hover={{ textDecoration: 'none', bg: 'transparent', transition:'0.7s', borderColor:'white' }}
      {...props}
    >
      {children}
    </Link>
  );
};


function Hero() {

  return (
    <Box as='section' pt={'150px'} pb={'100px'} bg={'brand.morado'} color={'white'} textAlign={'center'} w={'100%'} h={'100%'} backgroundImage={"repeating-linear-gradient(59deg,rgba(255,255,255,0.3),transparent 2px,transparent,transparent 120px), repeating-linear-gradient(59deg,rgba(255,255,255,0.3),transparent 1px,transparent,transparent 120px), repeating-linear-gradient(90deg,rgba(255,255,255,0.3),transparent 2px,transparent,transparent 140px)"}>
      <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Image src={perfil} border={'8px'} borderColor={'brand.naranja'} borderRadius={'full'} w={'280px'} h={'280px'}/>
        <Heading as={'h1'} size={{base:'2xl',lg:'3xl'}} mb={'35px'}>Hola, soy Ignacio Fernandez</Heading>
        <Text fontSize={'2xl'} lineHeight={'30px'}>
          Soy un estudiante de ingeniería en sistemas muy apasionado y dedicado <br />
          con gran variedad de ideas creativas
        </Text>
        <Box w={{base:'250px',md:'450px'}} mt={'20px'} h={{base:'160px',md:'70px'}}>
          <Flex h={'100%'} justifyContent={'space-around'} direction={{base:'column', md:'row'}}>
            <HeroButton path={'#proyectos'}>Mis Trabajos</HeroButton>
            <HeroButton path={'#contacto'}><Icon as={IoPaperPlaneOutline} mr={'14px'}></Icon>Contáctame</HeroButton>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero