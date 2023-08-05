import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from './data/data.js';

const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-20 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;