import React, { useState } from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'


export default function Nav() {
  const [color, setColor]= useState(false); 
  const [logo, setLogo]= useState(false);
  const changeColor = () => {
      if (window.scrollY >= 90) {
          setLogo(true)
          setColor(true)
      }else{
          setColor(false)
          setLogo(false)
      }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <div>
      <nav className={color ? "navbar nav-bg fixed-top shadow navbar-expand-lg  pe-3 ps-3" : "navbar fixed-top  navbar-expand-lg  pe-3 ps-3" }>
     <div className="container ">
        <Link className="navbar-brand " to="home">{logo ?  <img className='imgNav' src="./images/bakery-color.png" alt="" />: <img className='imgNav' src="./images/bakery-light-1.png" alt="" />}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active text-light"  to='home'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="offers">Our Offer</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="gallery">Gallery</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="#">Blog</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="contact">Contact</Link>
            </li>


        </ul>
        </div>
        </div>
    </nav>
    </div>
  )
}
