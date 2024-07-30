import { Box, Flex } from "@chakra-ui/react"
import { color } from "framer-motion";

const CustomBox = ({ children, color, ...props }) => {
    return (
      <Box
        w={'18px'}
        h={'18px'}
        borderRadius={'50%'}
        position={'relative'}
        mb={'220px'}
        flexShrink={'0'}
        bg={color}
        {...props}
      >
        {children}
      </Box>
    );
  };

const TimeLine = ({ color }) => {
    return (
      <Box position={'absolute'} transform="translate(-25px, 60px)" w={'3px'} h={'700px'} bg={color}>
        <Flex direction={'column'} alignItems={'center'}>
            <CustomBox color={color}></CustomBox>
            <CustomBox color={color}> </CustomBox>
            <CustomBox color={color}></CustomBox>
        </Flex>
        
      </Box>
    )
  }
  export default TimeLine