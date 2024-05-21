import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'> 
        <h1>We ensure better education for a better world</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Amet ullam porro adipisci excepturi, 
                tenetur mollitia libero eius quasi, animi corrupti
                 quia velit autem illo 
                ab. Harum possimus voluptas ex obcaecati?</p>
            
                    <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
            </div>


        
    </div>
  )
}

export default Hero