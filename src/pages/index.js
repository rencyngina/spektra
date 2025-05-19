import React from 'react'
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/HeroSection/Hero';
import Footer from '@/Components/Footer/Footer';
import Blue from '@/Components/blue';
import Section1 from '@/Components/Section1';
import Section2 from '@/Components/Section2';
import Section3 from '@/Components/Section3';
import Section4 from '@/Components/Section4';
import Section5 from '@/Components/Section5';
import Section6 from '@/Components/Section6';



export default function Home() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Blue />
      <Section1 />
      <Section4 />
      <Section5 />
      <Section2 />
      <Section3 />
      {/*<Section6 />*/}
      <Footer />
    </div>
  );
}
// export default function Home() {