import React, { useState, useEffect } from 'react';
import About from '../components/about/About'
import Cover from '../components/cover/Cover'
import Navbar from '../components/navbar/Navbar'


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
    </>
  )
}
