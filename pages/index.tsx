import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import Head from 'next/head';
import Landing from 'components/Landing';
import About from 'components/About';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bruno Junqueira</title>
        <meta name="description" content="Bruno Junqueira Portifolio" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <Landing/>
        <About/>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Home
