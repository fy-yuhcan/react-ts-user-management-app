import React from 'react';
import ReactDOM from 'react-dom/client';
import {  ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.ts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
