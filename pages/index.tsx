import React, { useState, useEffect } from 'react';
import About from '../components/about/About'
import Collab from '../components/collab/Collab';
import Cover from '../components/cover/Cover'
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio/Portfolio'


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
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Portfolio />
      <Collab />
    </>
  )
}
