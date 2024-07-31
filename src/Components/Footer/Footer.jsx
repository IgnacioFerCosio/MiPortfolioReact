import React from 'react'
import {Box, Link, Text , Icon, Flex} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";

function Footer() {

  return (
    <Box as='section' bg={'#fdbf60'} p={'1.5% 10%'} color={'#644729'} fontSize={'18px'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} direction={{base:'column', md:'row'}}>
        <Text>Diseñado y Desarrollado por Ignacio Fernandez</Text>
        <Box w={'100px'}>
          <Flex justifyContent={'space-between'}>
            <Link href='https://github.com/IgnacioFerCosio' target="_blank">
              <Icon as={FaGithub} fontSize={'40px'} color={'#644729'} _hover={{color: 'brand.naranja'}} transition={'0.7s'}>
              </Icon>
            </Link>
            <Link href="https://www.linkedin.com/in/ignacio-fern%C3%A1ndez-4048a41b3/" target="_blank"> 
              <Icon as={FaLinkedin} fontSize={'40px'} color={'#644729'} _hover={{color: 'brand.naranja'}} transition={'0.7s'}>
              </Icon>
            </Link>
          </Flex>
          
        </Box>
      </Flex>
      
    </Box>
  )
}

export default Footer