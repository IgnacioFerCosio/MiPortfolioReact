import { Card, CardFooter, Text, Image, Flex } from "@chakra-ui/react";
import fondoVioleta from '/src/assets/images/fondoVioleta.png';
import fondoNaranja from '/src/assets/images/fondoNaranja.png';

function Cards({ imagen1, imagen2, imagen1Styles , imagen2Styles, titulo, texto }) {
  return (
    <Card 
    w={'31.5%'} 
    h={'420px'} 
    bg={'#f4f4f4'} 
    borderRadius={'30px'} 
    textAlign={'center'} 
    position="relative"
    transition={'0.7s'} 
    _hover={{ '& .imagen_principal': { opacity: 0 }, '& .fondo_principal': { opacity: 0 }, backgroundColor:'brand.morado', color:'white' }}
    >
      <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
        
          <Image
            src={fondoVioleta}
            w={'130px'}
            h={'180px'}
            pt={'12%'}
            position={'absolute'}
            transform="translate(0px, -45%)"
            opacity={'1'}
          />
          <Image
            src={fondoNaranja}
            w={'130px'}
            h={'180px'}
            pt={'12%'}
            position={'absolute'}
            transform="translate(0px, -45%)"
            className="fondo_principal"
            transition="opacity 0.7s ease"
          />
          <Image
            src={imagen1}
            position={'absolute'}
            opacity={'1'}
            mt={'70px'}
            transform="translate(0px, -95%)"
            {...imagen1Styles}

          />
          <Image
            src={imagen2}
            position={'absolute'}
            mt={'70px'}
            transform="translate(0px, -95%)"
            className="imagen_principal"
            transition="opacity 0.7s ease"
            {...imagen2Styles}
          />
          <Text mt={'200px'} fontWeight={'bold'} fontSize={'22px'}>{titulo}</Text>

        <CardFooter>
          <Text lineHeight={'25px'}>{texto}</Text>
        </CardFooter>
      </Flex>
    </Card>
  );
}

export default Cards;
