import React, { useRef, useState } from 'react';
import { Box, Heading, Input, Textarea, Button, Flex, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';

function Contacto() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (values, actions) => {
    emailjs
      .sendForm('service_58eyfzq', 'template_mp06qf3', form.current, 'oq3LzRZ6UOI-LhSSe')
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Enviado Exitosamente');
          actions.resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    actions.setSubmitting(false);
  };

  return (
    <Box as='section' m={'5% 0'}>
      <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading as={'h4'} fontSize={'20px'} color={'brand.naranja'} mb={'8px'}>CONTACTO</Heading>
        <Heading as={'h1'} fontSize={'38px'} mt={'0px'}>Tienes alguna consulta?</Heading>
        <Formik 
          initialValues={{ 
            user_name: '', 
            user_email: '',
            message: '' 
          }}
          validate={(values) => {
            let errors = {};
            if (!values.user_name) {
              errors.user_name = "*El nombre no puede estar vacío";
            } else if (values.user_name.length >= 30) {
              errors.user_name = "*El nombre no es válido";
            }
            if (!values.user_email) {
              errors.user_email = "*El email no puede estar vacío";
            } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(values.user_email)) {
              errors.user_email = "*El email no es válido";
            }
            if (!values.message) {
              errors.message = "*La descripción no puede estar vacía";
            } else if (values.message.length >= 300) {
              errors.message = "*La descripción es muy larga";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            sendEmail(values, actions);
          }}
        >
          {({
              errors,
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
          }) => (
            <Box as='form' ref={form} onSubmit={handleSubmit} w={'52%'}>
              <Flex direction={'column'} justifyContent={'space-between'} h={'500px'}>
                <Box h={'15%'}>
                  <Flex justifyContent={'space-between'}>
                    <Box w={'49%'}>
                      <Input 
                        name='user_name'
                        value={values.user_name}
                        onChange={handleChange}
                        type='text' 
                        placeholder='Tu Nombre'  
                        bg={'#efeffb'} 
                        border={'none'} 
                        borderRadius={'10px'} 
                        h={'70px'} 
                        _placeholder={{color: '#a7a8a8'}} 
                        _focus={{ border: '2px solid black'}} 
                      />
                      {errors.user_name && <Text color='red'>{errors.user_name}</Text>}
                    </Box>
                    
                    <Box w={'49%'}>
                      <Input 
                        name='user_email'
                        value={values.user_email}
                        onChange={handleChange}
                        type='email' 
                        placeholder='Tu Mail' 
                        bg={'#efeffb'}  
                        border={'none'} 
                        borderRadius={'10px'} 
                        h={'70px'} 
                        _placeholder={{color: '#a7a8a8'}} 
                        _focus={{ border: '2px solid black'}}
                      />
                      {errors.user_email && <Text color='red'>{errors.user_email}</Text>}
                    </Box>
                  </Flex>
                </Box>
                <Textarea 
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                  placeholder='Descripción' 
                  border={'none'} 
                  bg={'#efeffb'} 
                  borderRadius={'10px'}
                  h={'58%'} 
                  transform={'translate(0,10px)'}
                  _placeholder={{color: '#a7a8a8'}} 
                  _focus={{ border: '2px solid black'}} 
                  resize={'none'}
                />
                {errors.message && <Text color='red'>{errors.message}</Text>}
                <Button 
                  type='submit'
                  border={'2px'} 
                  borderColor={'brand.naranja'} 
                  w={'100%'} 
                  color={'white'} 
                  bg={'brand.naranja'} 
                  h={'15%'} 
                  transition={'0.7s'}
                  _hover={{bg: 'white', color: 'brand.naranja'}}
                  isLoading={isSubmitting}
                >Enviar</Button>
                {successMessage && <Text color='green' textAlign={'center'}>{successMessage}</Text>}
              </Flex>   
            </Box>
          )}
        </Formik>
      </Flex>
    </Box>
  )
}

export default Contacto;
