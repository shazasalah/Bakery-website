import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'

export default function ContactOne() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className='contactOne d-flex flex-column justify-content-center align-items-center'>
                   <div><h2>Contact</h2></div> 
                    <div> 
                        <Link className='link' to="home">Home</Link> <span> / </span>
                        <Link className='link' to="contact">Contact</Link>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
