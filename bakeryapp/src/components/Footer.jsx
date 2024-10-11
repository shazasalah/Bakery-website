import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="container-fluid sticky-bottom  ">
        <div className="row paddingFooter footerTwo ">
        <div className="col-md-3 ">
          <div className="cardFooter text-start ">
            <h4 className=''>About us</h4>
            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
            <p>
            We are the champions! We are the most amazing theme of all time, yeah.
            </p>
           </div>
          </div>
          <div className="col-md-3 ">
          <div className="cardFooter text-start">
            <h4 className=''>Why we are special?</h4>
            <ul>
            <li>
            &gt;  Our magical recipe.
              </li>
              <li>
              &gt;  We care about environment.
              </li>
              <li>
              &gt; We are trusted by hundreds of clients.
              </li>
              <li>
              &gt; Social media loves us!
              </li>
              <li className='border-0'>
              &gt; This list is super easy to create.
              </li>
            </ul>
          </div>
          </div>
          <div className="col-md-3 ">
          <div className="cardFooter text-start">
            <h4 className=''>Opening Hours</h4>
            <ul>
            <li>
            &gt;  Monday 10AM - 9PM
              </li>
              <li>
              &gt; Tuesday 10AM - 9PM
              </li>
              <li>
              &gt;  Wednesday 10AM - 9PM
              </li>
              <li>
              &gt; Thursday 10AM - 10PM
              </li>
              <li>
              &gt; Friday 10AM - 10PM
              </li>
              <li className='border-0'>
              &gt; Weekends 10AM - 11PM
              </li>
            </ul>

          </div>
          </div>
          <div className="col-md-3 ">
          <div className="cardFooter text-start">
            <h4 className=''>Contact Details</h4>
            <ul>
                <li>
                <i class="fa-solid fa-location-dot"></i>  Manchester Road 123-78B, Silictown 7854MD, Great Country
                </li>
                <li>
                <i class="fa-solid fa-phone"></i><a href="tel:+46 123 456 789">+46 123 456 789</a>
                </li>
                <li>
                <i class="fa-solid fa-envelope"></i> <a href="">hello@sitename.com</a>
                </li>
                <li className='border-0'>
                <i class="fa-solid fa-earth-africa"></i> <a href="">http://www.sitename.com</a>
                </li>
                      </ul>
          </div>
          </div>
            

        </div>
        <div className="row paddingFooter footerOne footer">

  
          {/* to make footer sticky in bottom 1.make sure col-12 2.fixed-bottom */}
            <div className='footerOne'>
            <img src="./images/bakery-light-1.png" alt="" />
            <p>copyright 2017. All rights reserved.</p>
            {/* to make icon in center 1.div to hold icon 2.div to each icon 3.for container div &div icon give d-flex, justify-content-center,align-item-center */}
            <div className="iconsContainer d-flex justify-content-center">
            <div className='i-border d-flex justify-content-center align-items-center'> 
             <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className='i-border d-flex justify-content-center align-items-center'> 
            <i class="fa-brands  fa-google-plus-g"></i>
            </div>
            <div className='i-border d-flex justify-content-center align-items-center'> 
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className='i-border d-flex justify-content-center align-items-center'> 
            <i class="fa-brands fa-twitter"></i>
            </div>
            </div>
            </div>

        </div>
      </div>
      
    </div>
  )
}
