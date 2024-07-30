import { Text, Card, Box, Flex} from "@chakra-ui/react"

const CustomText = ({ children, ...props }) => {
  return (
    <Text
      pl={'25px'}
      lineHeight={'22px'}
      {...props}
    >
      {children}
    </Text>
  );
};


const EduYExpCard = ({ texto1, texto2, texto3, texto4, color }) => {
    return (
      <Card bg={color} borderRadius={'10px'} h={'215px'} w={'100%'} mb={'25px'}>
        <Flex alignItems={'center'} h={'100%'}>
          <Box>
            <CustomText>{texto1}</CustomText>
            <CustomText>{texto2}</CustomText>
            <CustomText><b>{texto3}</b></CustomText>
            <CustomText>{texto4}</CustomText>
          </Box>
        </Flex>
      </Card>
    )
  }
  export default EduYExpCard