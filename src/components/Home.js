import React from 'react';
import Cards from './Cards';
import Buttons from './Button';
import Input1 from './InputFields/Input1';
import Nav1 from './Navbars/Nav1';
import Footer from './Footer/Footer';
import Nav2 from './Navbars/Nav2';
import Nav3 from './Navbars/Nav3';

export default function Home() {
  return (
    <div>
      <Nav1 />
      <Cards />
      <Buttons />
      <Input1 />
      <Nav2 />
      <Nav3 />
      <Footer />
    </div>
  );
}
