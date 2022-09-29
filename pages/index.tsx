import type { NextPage } from 'next';

import Head from 'next/head';
import Landing from 'components/Landing';
import About from 'components/About';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import Footer from 'components/Footer';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bruno Junqueira</title>
        <meta name="description" content="Bruno Junqueira Portfolio" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <Landing/>
        <About/>
        <Projects/>
        <Skills/>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
