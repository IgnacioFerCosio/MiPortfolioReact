import React from 'react'
import {Box, Heading, FormControl, FormErrorMessage, Input, Textarea, Button, Flex} from '@chakra-ui/react'
import {Formik} from 'formik'
import { color } from 'framer-motion'

function Contacto() {

  return (
    <Box as='section' m={'5% 0'}>
      <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'8px'}>CONTACTO</Heading>
        <Heading as={'h1'} fontSize={'38px'} mt={'0px'}>Tienes alguna consulta?</Heading>
        <Formik
        initialValues={{ 
          email: '', 
          password: '' 
          }}>
          <FormControl w={'52%'}>
            <Flex direction={'column'} justifyContent={'space-between'} h={'450px'}>
              <Box h={'15%'}>
                <Flex justifyContent={'space-between'}>
                  <Input 
                  type='text' 
                  placeholder='Tu Nombre' 
                  w={'49%'} 
                  bg={'#efeffb'} 
                  border={'none'} 
                  borderRadius={'10px'} 
                  h={'70px'} 
                  _placeholder={{color: '#a7a8a8'}} 
                  _focus={{ border: '2px solid black'}} 
                  />
                  <Input 
                  type='email' 
                  placeholder='Tu Mail' 
                  w={'49%'} 
                  bg={'#efeffb'}  
                  border={'none'} 
                  borderRadius={'10px'} 
                  h={'70px'} 
                  _placeholder={{color: '#a7a8a8'}} 
                  _focus={{ border: '2px solid black'}}
                  />
                </Flex>
              </Box>
              <Textarea 
              placeholder='Descripción' 
              border={'none'} 
              bg={'#efeffb'} 
              borderRadius={'10px'}
              h={'60%'} 
              _placeholder={{color: '#a7a8a8'}} 
              _focus={{ border: '2px solid black'}} 
              resize={'none'}
              />
              <Button 
              border={'2px'} 
              borderColor={'brand.naranja'} 
              w={'100%'} 
              color={'white'} 
              bg={'brand.naranja'} 
              h={'15%'} 
              transition={'0.7s'}
              _hover={{bg: 'white', color: 'brand.naranja'}}
              >Enviar</Button>
            </Flex>
            
          </FormControl>
        </Formik>
      </Flex>
      
      
    </Box>
  )
}

export default Contacto