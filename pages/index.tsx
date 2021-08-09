import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import About from '../components/about/About'
import Collab from '../components/collab/Collab';
import Cover from '../components/cover/Cover'
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio/Portfolio'


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);
  return (
    <>
      <Head>
        <title>Samuel Solomon</title>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="UTF-8"/>
        <meta name="description" content="" /> 
      </Head>
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Portfolio />
      <Collab />
      <Footer />
    </>
  )
}
