import { Text, Image, Flex, Box, Heading } from "@chakra-ui/react";


function Skill({ imagen, titulo, texto }) {
  return (
    <Box>
        <Flex alignItems={'center'}>
            <Image src={imagen} w={'150px'} h={'150px'} borderRadius={'150px'}/>
            <Box>
                <Heading as={'h6'} fontSize={'16px'} mb={'0'}>{titulo}</Heading>
                <Text mt={'5px'}>{texto}</Text>
            </Box>  
        </Flex>     
    </Box>

      
  );
}

export default Skill;