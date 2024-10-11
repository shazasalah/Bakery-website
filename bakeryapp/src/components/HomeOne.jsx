import React from 'react';
import '../styles/Home.css';

export default function HomeOne() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
            <div className="homeOne d-flex justify-content-center align-items-center">
              <div className="textContainer ">
                <p className='p1'>Welcome to</p>
                <h2> family Bakery</h2>
                <p className='p2'>We're the biggest, best equipped and most advanced Bakery in the greater<br/> Los Angeles area. </p>
                <div className='btnContaoner'>
                  <button className='me-3 btn oneBtn'>Learn More</button>
                  <button className='btn oneBtn oneClear'>Contact Us</button>
                  </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
