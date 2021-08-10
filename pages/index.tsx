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
import Skills from '../components/skills/Skills';


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
        
        <meta name="og:title" property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />  
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />  
      </Head>

      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <Skills />
      <About />
      <Portfolio />
      <Collab />
      <Footer />
    </>
  )
}
