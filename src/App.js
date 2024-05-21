import React, { useState } from 'react'
import { Navbar } from './componets/Navbar/Navbar';
import './index.css'
import Hero from './componets/Hero/Hero';
import Programs from './componets/program/Programs';
import Tittle from './componets/Tittle/Tittle';
import About from './componets/about/About';
import Campuse from './componets/Campuse/Campuse';
import Testimonials from './componets/Testimonials/Testimonials';
import Contact from './componets/Contact/Contact';
import Footer from './componets/footer/Footer';
import VideoPlayer from './componets/video player/VideoPlayer';


export const App = () => {
  const [playState, SetPlayState] = useState(false)
  return (
    
    <div>
      <Navbar />
      <Hero />
      
     
      
    <div className="container">
      <Tittle subtittle='Our Program' tittle ='What we offer'/>
    <Programs />
    <About SetPlayState ={SetPlayState}/>
    <Tittle subtittle='Gallary' tittle ='Campuse Photos'/>
    < Campuse/>
    <Tittle subtittle='Testimonials' tittle ='what student says'/>
    <Testimonials />
    <Tittle subtittle='Contact Us' tittle ='Get in Touch'/>
    <Contact />
   <Footer />

   
    </div>
    <VideoPlayer  playState={playState} SetPlayState={SetPlayState}/>
     

    </div>
  )
}


export default App;