import QRCode from "../components/QRCode";
import { Box } from "@chakra-ui/react";

function QRCodeScreen(){

    return(
        <Box backgroundColor='hsl(212, 45%, 89%)' width="100%" height='100vh'
            display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <QRCode/>
        </Box>
    )
}

export default QRCodeScreen;