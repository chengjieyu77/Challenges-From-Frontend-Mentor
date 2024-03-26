import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import QRCodeScreen from './screens/QRCodeScreen';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <QRCodeScreen/>
    </ChakraProvider>
  );
}

export default App;
