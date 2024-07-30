import { Text, Image, Flex, Box, Heading } from "@chakra-ui/react";

function Cuadros({ imagen, titulo, texto }) {
  return (
    <Box m={'3% 0'}>
        <Flex direction={'column'} justifyContent={'center'} alignContent={'center'}>
           <Image src={imagen} borderRadius={'35px'} />
            <Heading as={'h5'} mt={'12px'} mb={'0'} fontSize={'22px'}>{titulo}</Heading>
            <Text mt={'6px'}>{texto}</Text> 
        </Flex>
    </Box>
  );
}

export default Cuadros;
