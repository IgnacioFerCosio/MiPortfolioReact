import { Button } from "@chakra-ui/react"

const Buttons = ({ children, ...props }) => {
    return (
      <Button
        borderRadius={'45px'} 
        bg={'brand.naranja'} 
        color={'white'} 
        border={'2px'} 
        borderColor={'brand.naranja'} 
        p={'32px 58px'} 
        fontSize={'19px'} 
        fontWeight={'500'} 
        _hover={{bg: "transparent", color: "brand.naranja", transition:'0.7s'}}
        {...props}
      >
        {children}
      </Button>
    )
  }
  export default Buttons