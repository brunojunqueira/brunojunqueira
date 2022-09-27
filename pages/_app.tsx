import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react';

import Header from 'components/Header';

import { main } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={main}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
