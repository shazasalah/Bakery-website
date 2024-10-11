import React from 'react'
import '../styles/Home.css';


export default function HomeTwo() {
  return (
    <div>
      <div className="container">
        <div className="row homeTwo">
        <div className="col-md-6 col-sm-12">
            <img className='w-100' src="./images/alexandru-stavrica-170390-800x760.jpg" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 align-content-center">
            <div className="textContainer2 text-start">
                <h3>Who we are?</h3>
                <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
                <ul>
                    <li className='d-flex align-items-center text-start'>
                        <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-leaf  "></i>
                        </div> 
                        <div>We care about environment.</div>
                    </li>
                    <li className='d-flex align-items-center text-start'>
                        <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-users"></i>
                        </div>We are trusted by hundreds of clients.
                    </li>
                    <li className='d-flex align-items-center text-start '>
                    <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-heart"></i>
                    </div>Social media loves us!</li>
                    <li className='d-flex align-items-center text-start'>
                    <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-check"></i>
                    </div>This list is super easy to create.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
