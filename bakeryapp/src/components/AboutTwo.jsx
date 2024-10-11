import React from 'react'
import '../styles/About.css';


export default function AboutTwo() {
  return (
    <div className='container'>
        <div className="row aboutTwo">
        <div className="col-md-6 col-sm-12 imageContainer2">
            <img className='w-100' src="./images/roman-kraft-56589-800x760.jpg" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 align-content-center">
            <div className="textContainer2 text-start">
                <h3>Our Story</h3>
                <p className='p1'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className=' borderLine'></div>
                <p className='p2'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
        </div>

    </div>
  )
}
