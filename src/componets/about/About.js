import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({SetPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'  onClick={()=>
            {SetPlayState(true)}}/>
           
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur vero voluptatem nihil, quia reiciendis vitae fugiat possimus suscipit, corporis, voluptates voluptate cumque modi minus placeat! Molestiae accusamus qui praesentium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur vero voluptatem nihil, quia reiciendis vitae fugiat possimus suscipit, corporis, voluptates voluptate cumque modi minus placeat! Molestiae accusamus qui praesentium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur vero voluptatem nihil, quia reiciendis vitae fugiat possimus suscipit, corporis, voluptates voluptate cumque modi minus placeat! Molestiae accusamus qui praesentium!</p>
        </div>
        
    </div>
  )
}

export default About