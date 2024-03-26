import { Card, CardBody } from '@chakra-ui/react'
import { Heading, Image, Text, Stack } from "@chakra-ui/react";
function QRCode(){
  return(
    <Card maxW='sm' borderRadius="15" textAlign='center' width='80%'>
    <CardBody>
    <Image
      src='/image-qr-code.png'
      alt='qr code'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3' padding='1' fontFamily='"Mynerve", cursive'>
      <Heading size='md' fontWeight='700' >Improve your front-end skills by building projects</Heading>
      <Text fontSize='15px' fontWeight='400' color='hsl(220, 15%, 55%)'>
        Scan the QR code to visit Frontend Mentor's and take your coding skills to the next level
      </Text>
    </Stack>
  </CardBody>
</Card>
  )

}


export default QRCode;